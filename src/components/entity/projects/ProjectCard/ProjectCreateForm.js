import React, {useState} from 'react'

import useCreateProject from 'hooks/mutations/projects/useCreateProject'

import Box from '@mui/material/Box'
import {Input, Typography} from '@mui/material'

export default function ProjectCreateForm() {
  const [input, setInput] = useState('')
  const [disabled, setdisabled] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const {createProject} = useCreateProject()

  async function handleClick() {
    if (input && input.length > 0) {
      setdisabled(true)
      await createProject(input)
      setInput('')
    }
    setdisabled(false)
  }

  return (
    <Box className="flex items-center">
      <Typography variant="h5" component="h1">
        All Projects
      </Typography>
      {showForm ? (
        <div className="ml-5">
          <Input
            placeholder="Project Name"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
          />
          <button
            className="bg-body-primary px-4 py-2 mx-3 text-text-inversed rounded-lg"
            disabled={disabled}
            onClick={handleClick}
          >
            Create
          </button>
          <button
            className="bg-slate-300 px-4 py-2 rounded-lg"
            disabled={disabled}
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="bg-body-primary px-4 py-2 ml-5 text-text-inversed rounded-lg"
          disabled={disabled}
          onClick={() => setShowForm(true)}
        >
          Add new
        </button>
      )}
    </Box>
  )
}
