import { useSetRecoilState } from 'recoil'
import { history, useFetchWrapper } from '../_helpers'
import { authAtom } from '../_state'

import { useState } from 'react'
import { decode as atob } from 'base-64'
export { AuthService }

function AuthService() {
  const fetchWrapper = useFetchWrapper()
  const setAuth = useSetRecoilState(authAtom)
  const [refreshTokenTimeout, setRefreshTokenTimeout] = useState(0)
  const BASE_URL = process.env.REACT_APP_API_URL

  return {
    login,
    logout,
    verifyAccount,
    resetPassword,
    validateEmailUid,
    changePassword,
    refreshToken,
  }

  async function login(username, password) {
    try {
      const user = await fetchWrapper.post(`${BASE_URL}auth/login/`, {
        username,
        password,
      })
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user))
      setAuth(user)
      startRefreshTokenTimer(user)
      return 200
    } catch (error) {
      console.log(error)
      return 400
    }
  }

  function logout() {
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem('user')
    setAuth(null)
    history.push('/login')
    stopRefreshTokenTimer()
  }

  async function refreshToken() {
    const user = await fetchWrapper.post(`${BASE_URL}token/refresh/`, {
      refresh: getRefreshToken(),
    })
    console.log(user)
    //   Get the user from the localstorage and add the new access and refresh token
    let locals = JSON.parse(localStorage.getItem('user'))
    locals.access = user?.access
    locals.refresh = user?.refresh
    localStorage.setItem('user', JSON.stringify(locals))
    setAuth(locals)
    startRefreshTokenTimer(user)
    console.log('Refresh Function Activated')
    return user
  }

  function resetPassword(email, url) {
    return fetchWrapper.post(`${BASE_URL}auth/request-password-reset-email/`, {
      email: email,
      redirect_url: url,
    })
  }

  function getRefreshToken() {
    let user = JSON.parse(window.localStorage.getItem('user'))
    if (user) {
      return user['refresh']
    } else {
      return ''
    }
  }

  // helper methods

  function startRefreshTokenTimer(user) {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(user?.access.split('.')[1]))

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000)
    const timeout = expires.getTime() - Date.now() - 60 * 1000
    const refreshTokenValue = setTimeout(() => refreshToken(), timeout)
    // @ts-ignore
    setRefreshTokenTimeout(refreshTokenValue)
  }

  function stopRefreshTokenTimer() {
    clearTimeout(refreshTokenTimeout)
  }

  function validateEmailUid(uid, token) {
    return fetchWrapper.get(
      `${BASE_URL}auth/password-reset/` + uid + '/' + token + '/'
    )
  }

  function changePassword(password, token, uid) {
    return fetchWrapper.patch(`${BASE_URL}auth/password-reset-complete`, {
      password: password,
      token: token,
      uidb64: uid,
    })
  }

  async function verifyAccount(token) {
    const user = await fetchWrapper.post(`${BASE_URL}auth/email-verify/`, {
      token: token,
    })
    return user
  }
}
