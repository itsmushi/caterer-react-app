import { atom } from 'recoil'

export const activeStep = atom({ key: 'activeStep', default: 1 })
export const mechantName = atom({ key: 'mechantName', default: '' })
export const mechantAddress = atom({ key: 'mechantAddress', default: '' })
export const mechantCertificate = atom({
  key: 'mechantCertificate',
  default: '',
})
export const mechantBusinessLicense = atom({
  key: 'mechantBusinessLicense',
  default: '',
})
export const ownerIdCardNo = atom({ key: 'ownerIdCardNo', default: '' })
export const ownerName = atom({ key: 'ownerName', default: '' })
export const ownerEmail = atom({ key: 'ownerEmail', default: '' })
export const ownerPassword = atom({ key: 'ownerPassword', default: '' })
export const phoneInitial = atom({ key: 'phoneInitial', default: '' })
export const ownerPhone = atom({ key: 'ownerPhone', default: '' })
export const ownerPin = atom({ key: 'ownerPin', default: '' })
