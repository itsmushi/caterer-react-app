import { ThemeProvider } from '@emotion/react'
import { Grid, StepLabel } from '@mui/material'
import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import CustomTextInput from 'components/forms/customTextInput'
import RegisterLayout from 'components/layouts/registerLayout/registerLayout'
import { theme } from 'components/layouts/registerLayout/styles'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { activeStep } from '_state'
import {
  FinishAfterIcon,
  FinishBeforeIcon,
  MechantIcon,
  OwnerAfterIcon,
  OwnerBeforeIcon,
  WaitingAfterIcon,
  WaitingBeforeIcon,
} from './components/catererIcon'
import FinishStep from './components/finishStep'
import MerchantStep from './components/mechantStep'
import OwnerInfoStep from './components/OwnerInfoStep'
import WaitingStep from './components/WaitingStep'

const steps = [
  {
    label: 'Mechant Registration',
    icon: {
      before: <MechantIcon />,
      after: <MechantIcon />,
    },
  },
  {
    label: 'Owner Information',
    icon: {
      before: <OwnerBeforeIcon />,
      after: <OwnerAfterIcon />,
    },
  },
  {
    label: 'Waiting',
    icon: {
      before: <WaitingBeforeIcon />,
      after: <WaitingAfterIcon />,
    },
  },
  {
    label: 'Finish',
    icon: {
      before: <FinishBeforeIcon />,
      after: <FinishAfterIcon />,
    },
  },
]

const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#2B817B',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#2B817B',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 1,
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '12%',
    marginLeft: '-10%',
  },
}))

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
        <Stepper
          alternativeLabel
          nonLinear
          activeStep={_activeStep}
          connector={<Connector />}
        >
          {steps.map((e, index) => (
            <Step key={e.label} completed={_activeStep >= index ? true : false}>
              <StepLabel
                icon={_activeStep >= index ? e.icon.after : e.icon.before}
              >
                {e.label}{' '}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          mt={3}
          style={{}}
        >
          <Grid
            item
            xl={6}
            lg={6}
            md={8}
            sm={9}
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {_renderStepContent(_activeStep)}
          </Grid>
        </Grid>
      </RegisterLayout>
    </ThemeProvider>
  )
}
