import {
  Box,
  Button,
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material'
import CustomTextInput from 'components/forms/customTextInput'
import { alpha, styled } from '@mui/material/styles'
import React from 'react'
import CustomFileInput from 'components/forms/customFileInput'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import { Link } from 'react-router-dom'

export default function MerchantStep() {
  function certificateHandler(e) {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)

      console.log(url)
    }
  }
  function businessLisenceHandler(e) {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)

      console.log(url)
    }
  }
  return (
    <Box sx={{ width: '100%' }}>
      <CustomTextInput
        label="Merchant Name"
        placeholder="Merchant Name"
        onBlur={undefined}
        helperText={undefined}
        ariaLabel={undefined}
        error={undefined}
        icon={undefined}
      />
      <CustomTextInput
        label="Address"
        placeholder="Address"
        onBlur={undefined}
        error={undefined}
        icon={undefined}
        helperText={undefined}
        ariaLabel={undefined}
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
          onBlur={undefined}
          error={undefined}
          icon={<InsertDriveFileOutlinedIcon />}
          helperText={undefined}
          ariaLabel={'undefined'}
          inputHandler={undefined}
          type={undefined}
          name={undefined}
          value={undefined}
          onChange={certificateHandler}
        />
        <Box sx={{ width: '10px' }}></Box>
        <CustomFileInput
          label="Business License"
          placeholder="Add File"
          onBlur={undefined}
          error={undefined}
          icon={<InsertDriveFileOutlinedIcon />}
          helperText={undefined}
          ariaLabel={undefined}
          inputHandler={undefined}
          type={undefined}
          name={undefined}
          value={undefined}
          onChange={businessLisenceHandler}
        />
      </Box>
      <Link to="/forgot-password">
        <Typography variant="body1"> Forgot password? </Typography>
      </Link>

      <Button
        sx={{ width: '480px', marginY: '20px' }}
        color="primary"
        variant="contained"
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
