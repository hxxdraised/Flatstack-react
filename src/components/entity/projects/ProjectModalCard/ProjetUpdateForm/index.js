import React, {useState} from 'react'

import useUpdateProject from 'hooks/mutations/projects/useUpdateProject'

import CustomAreaField from 'components/entity/mui/CustomAreaField'
import handleFormChange from 'utils/forms/handleChange'
import compareFormStates from 'utils/forms/compareFormStates'

export default function ProjectUpdateForm({project}) {
  const {id, name, description} = project
  const INITIAL_STATE = {
    name: name,
    description: description ? description : ''
  }
  const [formState, setFormState] = useState(INITIAL_STATE)
  const {updateProject} = useUpdateProject()

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
  }

  async function onUpdateProjectClick() {
    if (formState.name && !compareFormStates(formState, INITIAL_STATE)) {
      await updateProject(id, formState.name, formState.description)
    }
  }

  return (
    <div className="w-[300px]">
      <CustomAreaField
        id="name"
        label="Name"
        placeholder="Project name"
        value={formState.name}
        onBlur={(e) => handleEvent(e)}
        onChange={(e) => handleEvent(e)}
      ></CustomAreaField>
      <CustomAreaField
        id="description"
        label="Description"
        placeholder="Description"
        value={formState.description}
        onBlur={(e) => handleEvent(e)}
        onChange={(e) => handleEvent(e)}
        multiline
        rows={5}
      ></CustomAreaField>
      <button
        className="bg-body-primary text-text-inversed px-4 py-2 rounded-lg"
        onClick={onUpdateProjectClick}
      >
        Update project
      </button>
    </div>
  )
}
