import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import Typography from '@mui/material/Typography'

export default function CustomLabel({label}) {
  const useStyle = makeStyles(() => ({
    label: {
      fontWeight: 'semi-bold',
      fontSize: '1rem',
      marginBottom: '.3rem'
    }
  }))
  const classes = useStyle()
  return <Typography className={classes.label}>{label}</Typography>
}
