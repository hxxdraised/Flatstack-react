import React, {useState} from 'react'

import useCreateComment from 'hooks/mutations/comments/useCreateComment'

import Box from '@mui/material/Box'
import CustomAreaField from 'components/entity/mui/CustomAreaField'
import {useStyle} from './components'

export default function CommentCreateForm({taskId}) {
  const [text, setText] = useState(undefined)
  const {createComment, loading} = useCreateComment()
  const classes = useStyle()

  function handleFormChange(e) {
    setText(e.target.value)
  }

  async function onCreateClick() {
    if (text) {
      await createComment(taskId, text)
      setText('')
    }
  }

  return (
    <Box className={classes.root}>
      <CustomAreaField
        placeholder="Comment"
        value={text}
        rows={3}
        onChange={(e) => handleFormChange(e)}
      />
      <button
        className="bg-body-primary px-4 py-2 mx-3 text-text-inversed rounded-lg"
        onClick={() => onCreateClick()}
        disabled={loading}
      >
        Send
      </button>
    </Box>
  )
}
