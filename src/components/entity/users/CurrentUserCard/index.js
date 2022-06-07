import React from 'react'

import Box from '@mui/material/Box'
import {Wrapper} from 'components/entity/components'
export default function CurrentUserCard({children}) {
  return (
    <Wrapper>
      <Box
        container
        justifyContent="start"
        alignItems="center"
        sx={{
          width: '400px',
          height: '500px'
        }}
      >
        {children}
      </Box>
    </Wrapper>
  )
}
