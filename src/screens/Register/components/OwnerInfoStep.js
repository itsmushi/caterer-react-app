import { Box, Button, Grid, InputLabel } from '@mui/material'
import CustomTextInput from 'components/forms/customTextInput'
import { useFormik } from 'formik'
import MuiPhoneNumber from 'material-ui-phone-number'
import React from 'react'
import { useRecoilState } from 'recoil'
import * as yup from 'yup'
import {
  activeStep,
  ownerEmail,
  ownerIdCardNo,
  ownerName,
  ownerPhone,
  ownerPin,
} from '_state'

export default function OwnerInfoStep() {
  const [_ownerIdCardNo, setOwnerIdCardNo] = useRecoilState(ownerIdCardNo)
  const [_ownerName, setOwnerName] = useRecoilState(ownerName)

  const [_ownerEmail, setOwnerEmail] = useRecoilState(ownerEmail)
  const [_ownerPhone, setOwnerPhone] = useRecoilState(ownerPhone)
  const [_ownerPin, setOwnerPin] = useRecoilState(ownerPin)
  const [_activeStep, setActiveStep] = useRecoilState(activeStep)

  const validationSchema = yup.object({
    ownerIdCardNo: yup.string().required('Required'),
    ownerName: yup.string().required('Required'),
    ownerEmail: yup.string().required('Required').email('Invalid email'),
    ownerPhone: yup.string().required('Required'),

    ownerPin: yup
      .string()
      .required('Required')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(4, 'Must be exactly 4 digits')
      .max(4, 'Must be exactly 4 digits'),
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

      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
          <InputLabel shrink sx={{ fontWeight: 'bold' }}>
            Phone Number
          </InputLabel>

          <MuiPhoneNumber
            defaultCountry={'us'}
            fullWidth={true}
            value={formik.values.ownerPhone}
            onChange={(e, v) => handlerOwnerPhone(e)}
            variant="filled"
          />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
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

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',

          // width: '150%',
          justifyContent: 'end',
          mt: '10%',
        }}
      >
        <Button
          color="inherit"
          onClick={() => {
            setActiveStep(0)
          }}
          sx={{ mr: 1, px: 4 }}
        >
          Back
        </Button>

        <Button
          variant="contained"
          size="large"
          sx={{ px: 4 }}
          onClick={() => {
            formik.handleSubmit()
            validationSchema.isValid(formik.values).then((valid) => {
              if (valid) {
                setActiveStep(2)
              }
            })
          }}
        >
          Next
        </Button>
      </Box>
    </>
  )
}
