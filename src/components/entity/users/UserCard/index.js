import React from 'react'

import Box from '@mui/material/Box'
import UserAvatar from './Avatar'

export default function UserCard({firstName, lastName, email}) {
  return (
    <Box className="flex bg-card-background items-center my-3 p-3 shadow-lg w-full">
      <UserAvatar firstName={firstName} lastName={lastName} />
      <h1 className="px-3 text-lg text-bold">{`${firstName} ${lastName}`}</h1>
      <p className="px-3 text-md text-bold">{email}</p>
    </Box>
  )
}
