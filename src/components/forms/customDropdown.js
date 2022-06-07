import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import PropTypes from 'prop-types'

import React from 'react'

export default function CustomDropDown({
  handleChange,
  label = '',
  width = { undefined },
  dropdownOptions,
  defaultSelected,
  isRequired = false,
}) {
  const [selected, setSelected] = useState(defaultSelected)

  function optionChangedHandler(val) {
    handleChange(val)
    setSelected(val)
  }

  return (
    <FormControl
      variant="filled"
      sx={{
        marginBottom: '10px',
        // width: width,
      }}
      required={isRequired}
    >
      {label === '' ? (
        <></>
      ) : (
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
      )}
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        autoWidth
        displayEmpty={true}
        value={selected === '' ? defaultSelected : selected}
        onChange={(e) => {
          optionChangedHandler(e.target.value)
        }}
      >
        {dropdownOptions.map((e) => {
          return (
            <MenuItem key={e.value} value={e.value}>
              {e.label}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

CustomDropDown.propTypes = {
  label: PropTypes.string,
  handleChange: PropTypes.func,
  dropdownOptions: PropTypes.any,
  isRequired: PropTypes.bool,
}
