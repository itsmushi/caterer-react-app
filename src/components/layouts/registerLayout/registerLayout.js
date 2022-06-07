import { Box, Grid } from '@mui/material'
import React from 'react'
import { useStyle } from './styles'

export default function RegisterLayout(props) {
  const { children } = props
  const classes = useStyle()
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      justifyContent="center"
      sx={{ my: 5 }}
    >
      <Grid item xl={10} lg={10} md={10} sm={10} xs={11}>
        {children}
      </Grid>
    </Grid>
  )
}
