import { Box, Button, Typography } from '@mui/material'

import React from 'react'
import { useHistory } from 'react-router-dom'

export default function FinishStep() {
  const history = useHistory()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'centre',
      }}
    >
      <Box
        sx={{ height: '80%', width: '80%', margin: 'auto' }}
        component="img"
        src="./images/registration/foodFinish.png"
        alt="food-waiting"
      ></Box>
      <Typography variant="body" align="center" sx={{ marginTop: '20px' }}>
        Your account is being verified
      </Typography>
      <Typography variant="body" align="center">
        For more information you will be notified in your email
      </Typography>
      <Button
        sx={{ width: '480px', marginY: '40px' }}
        color="primary"
        variant="outlined"
        onClick={() => {
          history.push('/dashboard')
        }}
      >
        Go to Home
      </Button>
    </Box>
  )
}
