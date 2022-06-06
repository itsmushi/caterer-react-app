import { Box, InputLabel, TextField } from '@mui/material'
import classes from './formStyles.module.css'
import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, InputAdornment } from '@mui/material'

export default function CustomTextInput({
  placeholder,
  type,
  name,
  label,
  value,
  isRequired = false,

  onBlur,
  helperText,
  ariaLabel,
  onChange,
  error,
  icon,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <InputLabel shrink sx={{ fontWeight: 'bold' }}>
        {label}
      </InputLabel>
      <TextField
        fullWidth={true}
        sx={{ borderRadius: '32px', marginBottom: '15px' }}
        className={classes.inputRounded}
        id="standard-basic"
        placeholder={placeholder}
        variant="filled"
        name={name}
        type={type}
        value={value}
        required={isRequired}
        onBlur={onBlur}
        helperText={helperText}
        error={error}
        onChange={(e) => {
          onChange(e)
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label={ariaLabel} edge="end">
                {icon}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}

CustomTextInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
}
