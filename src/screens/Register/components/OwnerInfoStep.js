import { Box, InputLabel, Typography } from '@mui/material'
import { Button } from 'bootstrap'
import CustomDropDown from 'components/forms/customDropdown'
import CustomFileInput from 'components/forms/customFileInput'
import CustomTextInput from 'components/forms/customTextInput'
import React from 'react'
import { Link } from 'react-router-dom'

export default function OwnerInfoStep() {
  const optionsPhone = [
    { label: '+1', value: '+1' },
    { label: '+2', value: '+2' },
  ]
  function handleChangePhoneInitial(value) {
    console.log(value)
  }
  return (
    <Box sx={{ width: '100%' }}>
      <CustomTextInput
        label="ID Card Number"
        placeholder="ID Card Number"
        onBlur={undefined}
        helperText={undefined}
        ariaLabel={undefined}
        error={undefined}
        icon={undefined}
      />
      <CustomTextInput
        label="Owner Name"
        placeholder="Owner Name"
        onBlur={undefined}
        error={undefined}
        icon={undefined}
        helperText={undefined}
        ariaLabel={undefined}
      />
      <CustomTextInput
        label="Email Address"
        placeholder="Email Address"
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
              handleChange={handleChangePhoneInitial}
              dropdownOptions={optionsPhone}
              defaultSelected={''}
            />
            <Box sx={{ width: '15px' }} />
            <CustomTextInput
              width="190px"
              placeholder="xxxx-xxxx-xxxx"
              onBlur={undefined}
              error={undefined}
              icon={undefined}
              helperText={undefined}
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
          onBlur={undefined}
          error={undefined}
          icon={undefined}
          helperText={undefined}
          ariaLabel={undefined}
        />
      </Box>
    </Box>
  )
}
