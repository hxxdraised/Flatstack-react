import React, {useState} from 'react'

import useCreateTask from 'hooks/mutations/tasks/useCreateTask'

import AddIcon from '@mui/icons-material/Add'
import {Input} from '@mui/material'

export default function TaskCreateForm({projectId}) {
  const [input, setInput] = useState('')
  const [disabled, setdisabled] = useState(false)

  const {createTask} = useCreateTask()

  async function handleClick() {
    if (input && input.length > 0) {
      setdisabled(true)
      await createTask(projectId, input, undefined, 'NOT_STARTED')
      setInput('')
    }
    setdisabled(false)
  }

  return (
    <div className="flex my-3">
      <Input
        className="w-full mr-2"
        placeholder="Task name"
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
      />
      <button
        className="bg-body-primary px-4 py-2 text-text-inversed rounded-lg"
        disabled={disabled}
        onClick={handleClick}
      >
        <AddIcon />
      </button>
    </div>
  )
}
