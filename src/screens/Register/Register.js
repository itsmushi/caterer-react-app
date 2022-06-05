import { ThemeProvider } from '@emotion/react'
import { StepLabel } from '@mui/material'
import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import Stepper from '@mui/material/Stepper'
import RegisterLayout from 'components/layouts/registerLayout/registerLayout'
import { theme } from 'components/layouts/registerLayout/styles'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { activeStep } from '_state'
import FinishStep from './components/finishStep'
import MerchantStep from './components/mechantStep'
import OwnerInfoStep from './components/OwnerInfoStep'
import WaitingStep from './components/WaitingStep'

const steps = ['Mechant Registration', 'Owner Infomation', 'Waiting', 'Finish']

export default function Register() {
  const _activeStep = useRecoilValue(activeStep)

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <MerchantStep />
      case 1:
        return <OwnerInfoStep />
      case 2:
        return <WaitingStep />
      case 3:
        return <FinishStep />
      default:
        return <div>Not Found</div>
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <RegisterLayout>
        <Box sx={{ width: '100%' }}>
          <Stepper alternativeLabel activeStep={_activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label} </StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box
            sx={{
              marginTop: '2%',
              marginX: '30%',

              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {_renderStepContent(_activeStep)}
          </Box>
        </Box>
      </RegisterLayout>
    </ThemeProvider>
  )
}
