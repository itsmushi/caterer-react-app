import React from 'react'
import { useStyle } from './styles'

export default function RegisterLayout(props) {
  const { children } = props
  const classes = useStyle()
  return <div className={classes.root}>{children}</div>
}
