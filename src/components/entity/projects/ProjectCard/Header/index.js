import React from 'react'

import useDestoryProject from 'hooks/mutations/projects/useDestroyProject'

import Box from '@material-ui/core/Box'
import {DeleteOutline} from '@mui/icons-material'

export default function Header({id, name, onProjectShowClick}) {
  const {destroyProject} = useDestoryProject()

  function handleDestroy() {
    const result = confirm('Are you sure you want to delete this project ?')
    if (result) destroyProject(id)
  }
  return (
    <Box component="div">
      <h3 className="p-3 font-semibold text-lg">{name}</h3>
      <dev className="flex justify-center gap-2">
        <button
          className="bg-slate-300 px-4 py-2 rounded-lg w-full"
          onClick={onProjectShowClick}
        >
          Edit project
        </button>
        <button
          className="bg-body-primary text-text-inversed px-4 py-2 rounded-lg"
          onClick={handleDestroy}
        >
          <DeleteOutline />
        </button>
      </dev>
    </Box>
  )
}
