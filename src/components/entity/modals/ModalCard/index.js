import React, {useEffect} from 'react'
import Box from '@mui/material/Box'

import {useStyle} from './components'
import ClearIcon from '@mui/icons-material/Clear'

export default function ModalCard({onCloseModalClick, children}) {
  const classes = useStyle()
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onCloseModalClick(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [onCloseModalClick])
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.root}>
        <Box className={classes.content}>{children}</Box>
        <button onClick={() => onCloseModalClick(false)}>
          <ClearIcon fontSize="large" />
        </button>
      </Box>
    </Box>
  )
}
