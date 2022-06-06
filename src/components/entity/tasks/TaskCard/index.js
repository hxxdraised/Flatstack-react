import React from 'react'
import Box from '@mui/material/Box'

export default function TaskCard({title, status, onTaskShowClick}) {
  return (
    <Box
      onClick={() => onTaskShowClick()}
      className="w-full bg-slate-300 p-3 my-2 rounded-lg"
    >
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-xs">{status}</p>
    </Box>
  )
}
