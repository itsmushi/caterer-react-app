import { Button, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { theme, useStyle } from './styles'

export default function RegisterLayout(props) {
  const { children } = props
  const classes = useStyle()
  return <div className={classes.root}>{children}</div>
}
