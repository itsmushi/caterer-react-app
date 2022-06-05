import { makeStyles } from '@material-ui/core'
import { createTheme } from '@mui/material/styles'
// const theme = createTheme({
//   palette: {
//     primary: {
//       // main: '#2B817B',
//       main: '#0052cc',
//       light: '#2B817B',
//       dark: '#2B817B',
//     },
//     secondary: {
//       main: '#fff',
//       light: '',
//       dark: '',
//     },
//   },
// })

let theme = createTheme({
  palette: {
    primary: {
      main: '#2B817B',
    },
    secondary: {
      main: '#fff',
    },
    action: {
      disabled: '#00000014',
    },
  },
})
const useStyle = makeStyles(() => ({
  root: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '4%',
    marginBottom: 'auto',

    // [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
    //   width: 600,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    // },
    // backgroundColor: theme.palette.background.default,
    // color: theme.palette.text.primary,
  },
  //   paper: {
  //     marginTop: theme.spacing(3),
  //     marginBottom: theme.spacing(3),
  //     padding: theme.spacing(2),
  //     [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
  //       marginTop: theme.spacing(6),
  //       marginBottom: theme.spacing(6),
  //       padding: theme.spacing(3),
  //     },
  //   },
}))

export { theme, useStyle }
