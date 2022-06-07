import React, {useEffect, useState} from 'react'

import useUpdateUser from 'hooks/mutations/users/useUpdateUser'

import Box from '@mui/material/Box'
import TextInput from 'components/form/TextInput'
import handleFormChange from 'utils/forms/handleChange'
import removeEmptyProperties from 'utils/forms/removeEmptyProperties'
import validateUpdateForm from './utils'
import udpateUserValidator from 'validators/formValidators/udpateUserValidator'

export default function UpdateUserForm({user}) {
  const INITIAL_FORM_STATE = {
    email: '',
    firstName: '',
    lastName: ''
  }
  const [formState, setFormState] = useState(INITIAL_FORM_STATE)
  const [errorState, setErrorState] = useState(INITIAL_FORM_STATE)

  const {updateUser, loading} = useUpdateUser()
  useEffect(() => {
    setErrorState((errorState) => udpateUserValidator(formState, errorState))
  }, [formState])

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
  }
  async function handleUpdateUser() {
    if (validateUpdateForm(formState, errorState, INITIAL_FORM_STATE)) {
      removeEmptyProperties(formState)
      await updateUser(formState)
      setFormState(INITIAL_FORM_STATE)
    }
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', pl: 2, pr: 5}}>
      <form>
        <TextInput
          id="email"
          placeholder={user.email}
          label="Email"
          value={formState.email}
          error={errorState.email}
          onChange={(e) => handleEvent(e)}
          autoComplete="off"
        />
        <TextInput
          id="firstName"
          placeholder={user.firstName}
          label="First Name"
          value={formState.firstName}
          error={errorState.firstName}
          onChange={(e) => handleEvent(e)}
          autoComplete="off"
        />
        <TextInput
          id="lastName"
          placeholder={user.lastName}
          label="Last Name"
          value={formState.lastName}
          error={errorState.lastName}
          onChange={(e) => handleEvent(e)}
          autoComplete="off"
        />
        <button
          className="bg-body-primary text-text-inversed px-4 py-2 rounded-lg"
          onClick={(e) => handleUpdateUser(e)}
          disabled={loading}
        >
          Update profile
        </button>
      </form>
    </Box>
  )
}
