import React, {useState} from 'react'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import CommentUpdateForm from '../CommentUpdateForm'
import Typography from '@mui/material/Typography'
import {useStyle} from './components'

export default function CommentCard({id, text, creator}) {
  const [showCommentUpdateForm, setShowCommentUpdateForm] = useState(undefined)
  const classes = useStyle()

  return (
    <Box className={classes.root}>
      <Box className={classes.sideBar}>
        <p>
          {creator.firstName} {creator.lastName}
        </p>
        <IconButton
          className={classes.icon}
          color="info"
          onClick={() => setShowCommentUpdateForm(true)}
        >
          <EditIcon />
        </IconButton>
      </Box>
      <Box>
        <Typography className={classes.text}>{text}</Typography>
        {showCommentUpdateForm && (
          <CommentUpdateForm
            id={id}
            text={text}
            onCloseFormClick={() => setShowCommentUpdateForm(false)}
          />
        )}
      </Box>
    </Box>
  )
}
