import { Box, Button, Grid, InputLabel } from '@mui/material'
import CustomDropDown from 'components/forms/customDropdown'
import CustomTextInput from 'components/forms/customTextInput'
import { useFormik } from 'formik'
import MuiPhoneNumber from 'material-ui-phone-number'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import * as yup from 'yup'
import {
  activeStep,
  ownerEmail,
  ownerIdCardNo,
  ownerName,
  ownerPhone,
  ownerPin,
  phoneInitial,
  ownerPassword,
} from '_state'

export default function OwnerInfoStep() {
  const [_ownerIdCardNo, setOwnerIdCardNo] = useRecoilState(ownerIdCardNo)
  const [_ownerName, setOwnerName] = useRecoilState(ownerName)
  const [_ownerEmail, setOwnerEmail] = useRecoilState(ownerEmail)
  const [_ownerPassword, setOwnerPassword] = useRecoilState(ownerPassword)
  const [_phoneInitial, setPhoneInitial] = useRecoilState(phoneInitial)
  const [_ownerPhone, setOwnerPhone] = useRecoilState(ownerPhone)
  const [_ownerPin, setOwnerPin] = useRecoilState(ownerPin)
  const [_activeStep, setActiveStep] = useRecoilState(activeStep)
  const [_confirmPassword, setConfirmPassword] = useState('')

  const validationSchema = yup.object({
    ownerIdCardNo: yup.string().required('Required'),
    ownerName: yup.string().required('Required'),
    ownerEmail: yup.string().required('Required').email('Invalid email'),
    ownerPassword: yup.string().required('Required'),
    confirmPassword: yup
      .string()
      .required('Required')
      .oneOf([yup.ref('ownerPassword'), null], 'Passwords must match'),
    phoneInitial: yup.string().required('Required'),
    ownerPhone: yup
      .string()
      .required('Required')
      .matches(/^[0-9]+$/, 'Must be only digits'),

    ownerPin: yup
      .string()
      .required('Required')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(4, 'Must be exactly 4 digits')
      .max(4, 'Must be exactly 4 digits'),
  })

  const dropDownOptions = [
    {
      label: '+1',
      value: '+1',
    },
    {
      label: '+2',
      value: '+2',
    },
  ]

  // @ts-ignore
  const formik = useFormik({
    initialValues: {
      ownerIdCardNo: _ownerIdCardNo,
      ownerName: _ownerName,
      ownerEmail: _ownerEmail,
      ownerPassword: _ownerPassword,
      confirmPassword: _confirmPassword,
      ownerPhone: _ownerPhone,
      ownerPin: _ownerPin,
      phoneInitial:
        _phoneInitial === '' ? dropDownOptions[0].value : _phoneInitial,
    },
    onSubmit: (values) => {},
    enableReinitialize: true,
    validationSchema: validationSchema,
  })

  function handlerOwnerIdCardNo(e) {
    setOwnerIdCardNo(e.target.value)
  }

  function handlerOwnerName(e) {
    setOwnerName(e.target.value)
  }

  function handlerOwnerEmail(e) {
    setOwnerEmail(e.target.value)
  }
  function handlerOwnerPassword(e) {
    setOwnerPassword(e.target.value)
  }
  function handlerOwnerPhone(e) {
    console.log(e.target.value)
    setOwnerPhone(e.target.value)
  }
  function handlerPhoneInitial(e) {
    formik.setFieldValue('phoneInitial', e)
    setPhoneInitial(e)
  }
  function handlerOwnerPin(e) {
    setOwnerPin(e.target.value)
  }

  return (
    <>
      <CustomTextInput
        label="ID Card Number"
        placeholder="ID Card Number"
        ariaLabel={undefined}
        icon={undefined}
        name={'ownerIdCardNo'}
        value={formik.values.ownerIdCardNo}
        onBlur={formik.handleBlur}
        onChange={handlerOwnerIdCardNo}
        error={
          formik.touched.ownerIdCardNo && Boolean(formik.errors.ownerIdCardNo)
        }
        helperText={formik.touched.ownerIdCardNo && formik.errors.ownerIdCardNo}
      />
      <CustomTextInput
        label="Owner Name"
        placeholder="Owner Name"
        icon={undefined}
        ariaLabel={undefined}
        value={formik.values.ownerName}
        onBlur={formik.handleBlur}
        onChange={handlerOwnerName}
        error={formik.touched.ownerName && Boolean(formik.errors.ownerName)}
        helperText={formik.touched.ownerName && formik.errors.ownerName}
      />
      <CustomTextInput
        label="Email Address"
        placeholder="Email Address"
        icon={undefined}
        value={formik.values.ownerEmail}
        onBlur={formik.handleBlur}
        onChange={handlerOwnerEmail}
        helperText={formik.touched.ownerEmail && formik.errors.ownerEmail}
        ariaLabel={undefined}
        error={formik.touched.ownerEmail && Boolean(formik.errors.ownerEmail)}
      />

      <CustomTextInput
        label="Password"
        placeholder="Password"
        type="password"
        value={formik.values.ownerPassword}
        onBlur={formik.handleBlur}
        onChange={handlerOwnerPassword}
        helperText={formik.touched.ownerPassword && formik.errors.ownerPassword}
        error={
          formik.touched.ownerPassword && Boolean(formik.errors.ownerPassword)
        }
      />

      <CustomTextInput
        label="Confirm Password"
        placeholder="Confirm password"
        type="password"
        value={formik.values.confirmPassword}
        onBlur={formik.handleBlur}
        onChange={(e) => setConfirmPassword(e.target.value)}
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
      />
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          <InputLabel
            shrink
            sx={{ fontWeight: 'bold', fontSize: '18px', color: '#1A1824' }}
          >
            Phone Number
          </InputLabel>

          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ backgroundColor: '' }}
          >
            <Grid item xl={3} lg={3} md={3} sm={3} xs={4}>
              <CustomDropDown
                handleChange={handlerPhoneInitial}
                dropdownOptions={dropDownOptions}
                defaultSelected={formik.values.phoneInitial}
              />
            </Grid>
            <Grid item xl={9} lg={9} md={9} sm={9} xs={8}>
              <CustomTextInput
                placeholder="xxxx-xxxx-xxxx"
                value={formik.values.ownerPhone}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.ownerPhone && Boolean(formik.errors.ownerPhone)
                }
                onChange={handlerOwnerPhone}
                helperText={
                  formik.touched.ownerPhone && formik.errors.ownerPhone
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <CustomTextInput
            label="Set Pin"
            placeholder="xxxx"
            icon={undefined}
            type={'password'}
            value={formik.values.ownerPin}
            onBlur={formik.handleBlur}
            error={formik.touched.ownerPin && Boolean(formik.errors.ownerPin)}
            ariaLabel={undefined}
            onChange={handlerOwnerPin}
            helperText={formik.touched.ownerPin && formik.errors.ownerPin}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 1, sm: 1, md: 1 }}
        direction="row"
        justifyContent="end"
        sx={{}}
      >
        <Grid item>
          <Button
            variant="outlined"
            // variant="contained"
            sx={{ px: 4 }}
            size="large"
            onClick={() => {
              setActiveStep(0)
            }}
          >
            Back
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            sx={{ px: 4 }}
            onClick={() => {
              formik.handleSubmit()
              validationSchema.isValid(formik.values).then((valid) => {
                if (valid) {
                  console.log(valid)
                  // setActiveStep(2)
                }
              })
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
