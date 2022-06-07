import React, {useState} from 'react'

import Box from '@mui/material/Box'
import EditIcon from '@mui/icons-material/Edit'
import CommentUpdateForm from '../CommentUpdateForm'
import UserAvatar from '../../users/UserCard/Avatar'

export default function CommentCard({id, text, creator}) {
  const [showCommentUpdateForm, setShowCommentUpdateForm] = useState(undefined)

  return (
    <Box className="w-full bg-slate-300 p-3 my-2 rounded-lg">
      <div className="flex gap-3 items-center">
        <UserAvatar firstName={creator.firstName} lastName={creator.lastName} />
        <h3 className=" font-semibold text-lg">
          {creator.firstName} {creator.lastName}
        </h3>
      </div>
      <Box className="flex items-center gap-2">
        <p>{text}</p>
        <button onClick={() => setShowCommentUpdateForm(true)}>
          <EditIcon />
        </button>
      </Box>
      {showCommentUpdateForm && (
        <CommentUpdateForm
          id={id}
          text={text}
          onCloseFormClick={() => setShowCommentUpdateForm(false)}
        />
      )}
    </Box>
  )
}
