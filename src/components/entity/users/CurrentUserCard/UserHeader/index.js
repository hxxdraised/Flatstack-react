import React from 'react'

import UserAvatar from '../../UserCard/Avatar'
import Box from '@material-ui/core/Box'
import {useStyle} from './components'
import {Img} from '../../components'

export default function UserHeader({user}) {
  const {avatarUrl, firstName, lastName} = user
  const classes = useStyle()

  return (
    <Box className={classes.root}>
      {avatarUrl ? (
        <Img src={avatarUrl} />
      ) : (
        <UserAvatar firstName={firstName} lastName={lastName} />
      )}
    </Box>
  )
}
