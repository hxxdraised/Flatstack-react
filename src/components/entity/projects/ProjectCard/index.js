import React from 'react'

import Box from '@material-ui/core/Box'
import Header from './Header'

import TaskCard from 'components/entity/tasks/TaskCard'
import TaskCreateForm from 'components/entity/tasks/TaskCreateForm'

export default function ProjectCard({
  id,
  name,
  tasks,
  onTaskShowClick,
  onProjectShowClick
}) {
  return (
    <Box className="w-[300px] p-5 mr-5 shadow-xl shadow-shadow rounded-lg">
      <Header
        id={id}
        name={name}
        onProjectShowClick={onProjectShowClick}
      ></Header>
      <TaskCreateForm projectId={id} />
      <div className="flex flex-col">
        {tasks?.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
            createdAt={task.createdAt}
            onTaskShowClick={() => {
              onTaskShowClick(id, task.id)
            }}
          />
        ))}
      </div>
    </Box>
  )
}
