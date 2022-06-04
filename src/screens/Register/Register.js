import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import RegisterLayout from 'components/layouts/registerLayout/registerLayout'
import MerchantStep from './components/mechantStep'
import { StepContent, StepLabel } from '@mui/material'
import OwnerInfoStep from './components/OwnerInfoStep'
import WaitingStep from './components/WaitingStep'
import FinishStep from './components/finishStep'
import { ThemeProvider } from '@material-ui/core'
import { theme } from 'components/layouts/registerLayout/styles'

const steps = ['Mechant Registration', 'Owner Infomation', 'Waiting', 'Finish']

export default function Register() {
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState({})

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

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
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
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
            {_renderStepContent(activeStep)}
          </Box>

          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: 'inline-block' }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        </Box>
      </RegisterLayout>
    </ThemeProvider>
  )
}
