import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import TextField from '@mui/material/TextField'
import CustomLabel from './CustomLabel'

export default function CustomAreaField({
  id,
  label,
  value,
  placeholder,
  onBlur,
  onChange,
  rows
}) {
  const useStyle = makeStyles(() => ({
    textField: {
      borderRadius: '.5rem',
      marginBottom: '.7rem',
      border: '1px solid #919191',
      width: '100%'
    }
  }))
  const classes = useStyle()
  return (
    <>
      <CustomLabel label={label} />
      <TextField
        id={id}
        placeholder={placeholder}
        className={classes.textField}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        multiline
        rows={rows ? rows : 1}
      />
    </>
  )
}
