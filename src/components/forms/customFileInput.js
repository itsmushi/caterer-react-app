import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import { Box, InputAdornment, InputLabel, TextField } from '@mui/material'
import React from 'react'

export default function CustomFileInput({
  placeholder,
  multiple = false,
  label,
  value,
  isRequired = false,
  onChange,
  name,
  helperText,
  error,
}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <InputLabel shrink sx={{ fontWeight: 'bold' }}>
        {label}
      </InputLabel>

      <TextField
        variant="filled"
        name={name}
        placeholder={placeholder}
        disabled={true}
        required={isRequired}
        error={error}
        helperText={helperText}
        value={value}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <label>
                <input
                  onChange={(e) => {
                    onChange(e)
                  }}
                  style={{ display: 'none' }}
                  id="upload-attachment"
                  multiple={multiple}
                  type="file"
                />
                <InsertDriveFileOutlinedIcon />
              </label>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}
