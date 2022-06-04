import { Box, InputLabel, Typography } from '@mui/material'
import { Button } from 'bootstrap'
import CustomDropDown from 'components/forms/customDropdown'
import CustomFileInput from 'components/forms/customFileInput'
import CustomTextInput from 'components/forms/customTextInput'
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { useRecoilState } from 'recoil'
import MuiPhoneNumber from 'material-ui-phone-number'
import {
  ownerEmail,
  ownerIdCardNo,
  ownerName,
  ownerPin,
  ownerPhone,
} from '_state'

export default function OwnerInfoStep() {
  const [_ownerIdCardNo, setOwnerIdCardNo] = useRecoilState(ownerIdCardNo)
  const [_ownerName, setOwnerName] = useRecoilState(ownerName)

  const [_ownerEmail, setOwnerEmail] = useRecoilState(ownerEmail)
  const [_ownerPhone, setOwnerPhone] = useRecoilState(ownerPhone)

  const [_ownerPin, setOwnerPin] = useRecoilState(ownerPin)

  const validationSchema = yup.object({
    ownerIdCardNo: yup.string().required('Required'),
    ownerName: yup.string().required('Required'),
    ownerEmail: yup.string().required('Required'),
    ownerPhone: yup.string().required('Required'),

    ownerPin: yup.string().required('Required'),
  })

  // @ts-ignore
  const formik = useFormik({
    initialValues: {
      ownerIdCardNo: _ownerIdCardNo,
      ownerName: _ownerName,
      ownerEmail: _ownerEmail,
      ownerPhone: _ownerPhone,
      ownerPin: _ownerPin,
    },
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
  function handlerOwnerPhone(v) {
    console.log(v)
    setOwnerPhone(v)
  }
  function handlerOwnerPin(e) {
    setOwnerPin(e.target.value)
  }

  return (
    <Box sx={{ width: '100%' }}>
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

      <Box
        sx={{
          width: '480px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '280px',
            height: '80px',
          }}
        >
          <InputLabel shrink sx={{ fontWeight: 'bold' }}>
            Phone Number
          </InputLabel>

          <MuiPhoneNumber
            defaultCountry={'us'}
            value={formik.values.ownerPhone}
            onChange={(e, v) => handlerOwnerPhone(e)}
            variant="filled"
          />
        </Box>
        <Box sx={{ width: '25px' }}></Box>
        <CustomTextInput
          label="Set Pin"
          width={'180px'}
          placeholder="xxxx"
          icon={undefined}
          value={formik.values.ownerPin}
          onBlur={formik.handleBlur}
          error={formik.touched.ownerPin && Boolean(formik.errors.ownerPin)}
          ariaLabel={undefined}
          onChange={handlerOwnerPin}
          helperText={formik.touched.ownerPin && formik.errors.ownerPin}
        />
      </Box>
    </Box>
  )
}
