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
import {
  ownerEmail,
  ownerIdCardNo,
  ownerName,
  ownerPhoneInitial,
  ownerPhoneMiddle,
  ownerPin,
} from '_state'

export default function OwnerInfoStep() {
  const [_ownerIdCardNo, setOwnerIdCardNo] = useRecoilState(ownerIdCardNo)
  const [_ownerName, setOwnerName] = useRecoilState(ownerName)
  const [_ownerEmail, setOwnerEmail] = useRecoilState(ownerEmail)
  const [_ownerPhoneInitial, setOwnerPhoneInitial] =
    useRecoilState(ownerPhoneInitial)
  const [_ownerPhoneMiddle, setOwnerPhoneMiddle] =
    useRecoilState(ownerPhoneMiddle)
  const [_ownerPin, setOwnerPin] = useRecoilState(ownerPin)

  const validationSchema = yup.object({
    ownerIdCardNo: yup.string().required('Required'),
    ownerName: yup.string().required('Required'),
    ownerPhoneInitial: yup.string().required('Required'),
    ownerPhoneMiddle: yup.string().required('Required'),
    ownerPin: yup.string().required('Required'),
  })

  // @ts-ignore
  const formik = useFormik({
    initialValues: {
      ownerIdCardNo: _ownerIdCardNo,
      ownerName: _ownerName,
      ownerEmail: _ownerEmail,
      ownerPhoneInitial: _ownerPhoneInitial,
      ownerPhoneMiddle: _ownerPhoneMiddle,
      ownerPin: _ownerPin,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
  })

  const optionsPhone = [
    { label: '+1', value: '+1' },
    { label: '+2', value: '+2' },
  ]

  function handlerOwnerIdCardNo(e) {
    setOwnerIdCardNo(e.target.value)
  }

  function handlerOwnerName(e) {
    setOwnerName(e.target.value)
  }
  function handlerChangePhoneInitial(value) {
    console.log(value)
  }

  function handlerChangePhoneMiddle(e) {
    setOwnerPhoneMiddle(e.target.value)
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
        error={formik.touched.ownerName && Boolean(formik.errors.ownerName)}
        helperText={formik.touched.ownerName && formik.errors.ownerName}
      />
      <CustomTextInput
        label="Email Address"
        placeholder="Email Address"
        icon={undefined}
        value={formik.values.ownerEmail}
        onBlur={formik.handleBlur}
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
          }}
        >
          <InputLabel shrink sx={{ fontWeight: 'bold' }}>
            Phone Number
          </InputLabel>
          {/* phne no inputs */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <CustomDropDown
              width={'80px'}
              handleChange={handlerChangePhoneInitial}
              dropdownOptions={optionsPhone}
              defaultSelected={optionsPhone[0]}
            />
            <Box sx={{ width: '15px' }} />
            <CustomTextInput
              width="190px"
              placeholder="xxxx-xxxx-xxxx"
              value={formik.values.ownerPhoneMiddle}
              onBlur={formik.handleBlur}
              error={
                formik.touched.ownerPhoneMiddle &&
                Boolean(formik.errors.ownerPhoneMiddle)
              }
              icon={undefined}
              helperText={
                formik.touched.ownerPhoneMiddle &&
                formik.errors.ownerPhoneMiddle
              }
              ariaLabel={undefined}
              label={undefined}
            />
          </Box>
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
          helperText={formik.touched.ownerPin && formik.errors.ownerPin}
        />
      </Box>
    </Box>
  )
}
