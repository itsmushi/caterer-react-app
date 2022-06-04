import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import { Box, Button, Typography } from '@mui/material'
import CustomFileInput from 'components/forms/customFileInput'
import CustomTextInput from 'components/forms/customTextInput'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import * as yup from 'yup'
import {
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
      mechantCertificate: _mechantCertificate,
      mechantBusinessLicense: _mechantBusinessLicense,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
  })

  function handlerMechantName(e) {
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
      console.log(url)
    }
  }
  function handlerMechantBusinessLicense(e) {
    const file = e.target.files[0]
    console.log(file)
    if (file) {
      const url = URL.createObjectURL(file)
      setBusinessLicenseName(file.name)
      setMechantBusinessLicense(url)
      console.log(url)
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <CustomTextInput
        label="Merchant Name"
        placeholder="Merchant Name"
        helperText={formik.touched.mechantName && formik.errors.mechantName}
        ariaLabel={undefined}
        error={formik.touched.mechantName && Boolean(formik.errors.mechantName)}
        value={formik.values.mechantName}
        icon={undefined}
        inputHandler={handlerMechantName}
        name={'merchantName'}
        onBlur={formik.handleBlur}
      />
      <CustomTextInput
        label="Address"
        placeholder="Address"
        onBlur={formik.handleBlur}
        inputHandler={handlerMechantAddress}
        value={formik.values.mechantAddress}
        error={undefined}
        icon={undefined}
        helperText={undefined}
        ariaLabel={undefined}
        name="merchantAddress"
      />
      <Box
        sx={{
          width: '480px',
          display: 'flex',

          justifyContent: 'space-between',
        }}
      >
        <CustomFileInput
          label="Certification"
          placeholder="Add File"
          onBlur={formik.handleBlur}
          error={undefined}
          icon={<InsertDriveFileOutlinedIcon />}
          helperText={undefined}
          ariaLabel={'undefined'}
          name={'merchantCertificate'}
          value={certificateName}
          onChange={handlerMechantCertificate}
        />
        <Box sx={{ width: '10px' }}></Box>
        <CustomFileInput
          label="Business License"
          placeholder="Add File"
          onBlur={formik.handleBlur}
          error={undefined}
          icon={<InsertDriveFileOutlinedIcon />}
          helperText={undefined}
          ariaLabel={undefined}
          name={'merchantBusinessLicense'}
          value={businessLicenseName}
          onChange={handlerMechantBusinessLicense}
        />
      </Box>
      <Link to="/forgot-password">
        <Typography variant="body1"> Forgot password? </Typography>
      </Link>

      <Button
        sx={{ width: '480px', marginY: '20px' }}
        color="primary"
        variant="contained"
        disabled={!formik.isValid || !formik.dirty}
      >
        Next
      </Button>

      <Box
        sx={{
          width: '480px',
          display: 'flex',

          justifyContent: 'center',
        }}
      >
        <Typography variant="body1"> Already have an account? </Typography>
        <Link to="/forgot-password">
          <Typography variant="body1"> Login </Typography>
        </Link>
      </Box>
    </Box>
  )
}
