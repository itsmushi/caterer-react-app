import { Box, Button, Grid, Typography } from '@mui/material'
import CustomFileInput from 'components/forms/customFileInput'
import CustomTextInput from 'components/forms/customTextInput'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as yup from 'yup'
import {
  activeStep,
  mechantAddress,
  mechantBusinessLicense,
  mechantCertificate,
  mechantName,
} from '_state'

export default function MerchantStep() {
  const [_mechantName, setMechantName] = useRecoilState(mechantName)
  const [_mechantAddress, setMechantAddress] = useRecoilState(mechantAddress)
  const [_mechantCertificate, setMechantCertificate] =
    useRecoilState(mechantCertificate)
  const [_mechantBusinessLicense, setMechantBusinessLicense] = useRecoilState(
    mechantBusinessLicense
  )
  const setActiveStep = useSetRecoilState(activeStep)
  const [certificateName, setCertificateName] = useState('')
  const [businessLicenseName, setBusinessLicenseName] = useState('')
  const validationSchema = yup.object({
    mechantName: yup.string().required('Required'),
    mechantAddress: yup.string().required('Required'),
    mechantCertificate: yup.string().required('Required'),
    mechantBusinessLicense: yup.string().required('Required'),
  })
  // @ts-ignore
  const formik = useFormik({
    initialValues: {
      mechantName: _mechantName,
      mechantAddress: _mechantAddress,
      mechantCertificate: certificateName,
      mechantBusinessLicense: businessLicenseName,
    },
    enableReinitialize: true,
    onSubmit: (values) => {},
    validationSchema: validationSchema,
  })

  function handlerMechantName(e) {
    console.log(formik)

    setMechantName(e.target.value)
  }
  function handlerMechantAddress(e) {
    setMechantAddress(e.target.value)
  }
  function handlerMechantCertificate(e) {
    const file = e.target.files[0]

    if (file) {
      const url = URL.createObjectURL(file)
      setCertificateName(file.name)
      setMechantCertificate(url)
    }
  }
  function handlerMechantBusinessLicense(e) {
    const file = e.target.files[0]

    if (file) {
      const url = URL.createObjectURL(file)
      setBusinessLicenseName(file.name)
      setMechantBusinessLicense(url)
    }
  }

  return (
    <>
      <CustomTextInput
        label="Merchant Name"
        placeholder="Merchant Name"
        helperText={formik.touched.mechantName && formik.errors.mechantName}
        ariaLabel={undefined}
        error={formik.touched.mechantName && Boolean(formik.errors.mechantName)}
        value={formik.values.mechantName}
        icon={undefined}
        onChange={handlerMechantName}
        name={'merchantName'}
        onBlur={formik.handleBlur}
      />
      <CustomTextInput
        label="Address"
        placeholder="Address"
        onBlur={formik.handleBlur}
        onChange={handlerMechantAddress}
        value={formik.values.mechantAddress}
        helperText={
          formik.touched.mechantAddress && formik.errors.mechantAddress
        }
        error={
          formik.touched.mechantAddress && Boolean(formik.errors.mechantAddress)
        }
        icon={undefined}
        ariaLabel={undefined}
        name={'merchantAddress'}
      />

      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CustomFileInput
            label="Certification"
            placeholder="Add File"
            name={'merchantCertificate'}
            error={
              formik.touched.mechantCertificate &&
              Boolean(formik.errors.mechantCertificate)
            }
            helperText={
              formik.touched.mechantCertificate &&
              formik.errors.mechantCertificate
            }
            value={formik.values.mechantCertificate}
            onChange={handlerMechantCertificate}
          />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <CustomFileInput
            label="Business License"
            placeholder="Add File"
            name={'merchantBusinessLicense'}
            error={
              formik.touched.mechantBusinessLicense &&
              Boolean(formik.errors.mechantBusinessLicense)
            }
            helperText={
              formik.touched.mechantBusinessLicense &&
              formik.errors.mechantBusinessLicense
            }
            value={formik.values.mechantBusinessLicense}
            onChange={handlerMechantBusinessLicense}
          />
        </Grid>
      </Grid>

      <Link to="/forgot-password">
        <Typography
          variant="body1"
          color="primary"
          sx={{ mt: 2, fontWeight: 'bold', fontSize: '14px' }}
        >
          Forgot password?
        </Typography>
      </Link>

      <Button
        sx={{ marginY: '20px', py: 1 }}
        color="primary"
        variant="contained"
        onClick={() => {
          formik.handleSubmit()
          validationSchema.isValid(formik.values).then((valid) => {
            if (valid) {
              setActiveStep(1)
            }
          })
        }}
      >
        Next
      </Button>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body1" sx={{ mr: 1 }}>
          Already have an account?
        </Typography>
        <Link to="/login">
          <Typography
            variant="body1"
            color="primary"
            sx={{ fontWeight: 'bold' }}
          >
            Login
          </Typography>
        </Link>
      </Box>
    </>
  )
}
