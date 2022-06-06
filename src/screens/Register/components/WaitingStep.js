// @ts-nocheck
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { activeStep } from '_state'

export default function WaitingStep() {
  const setActiveStep = useSetRecoilState(activeStep)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'centre',
      }}
    >
      <Box
        sx={{ height: '60%', width: '50%', margin: 'auto' }}
        component="img"
        src="./images/registration/foodWaiting.png"
        alt="food-waiting"
      ></Box>
      <Typography variant="body" align="center">
        Your account is being verified
      </Typography>
      <Typography variant="body" align="center">
        For more information you will be notified in your email
      </Typography>
      <Button
        sx={{ marginY: '40px' }}
        color="primary"
        variant="outlined"
        onClick={() => {
          setActiveStep(1)
        }}
      >
        Back
      </Button>
    </Box>
  )
}
