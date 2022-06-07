import React from 'react'

import useAuthUser from 'global/AuthUser'
import AuthorizeComponent from 'components/AuthorizeComponent'

import UserHeader from 'components/entity/users/CurrentUserCard/UserHeader'
import UpdateUserForm from 'components/entity/users/CurrentUserCard/UpdateUserForm'

function Profile() {
  const {user} = useAuthUser()

  return (
    <div className="w-[500px] shadow-lg shadow-shadow p-5 m-5">
      <UserHeader user={user} />
      <UpdateUserForm user={user} />
    </div>
  )
}

export default AuthorizeComponent(Profile, false, '/login')
