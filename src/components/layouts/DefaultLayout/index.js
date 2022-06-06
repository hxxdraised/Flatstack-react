import useAuthUser from 'global/AuthUser'
import React from 'react'
import DotLoader from 'react-spinners/DotLoader'

import NavBar from '../NavBar'
import {PageLoading, PageContent} from './components'

export default function DefaultLayout({loading, children}) {
  const {user} = useAuthUser()
  return (
    <div className="flex flex-row h-[100vh]">
      {user && <NavBar />}
      {loading ? (
        <PageLoading>
          <DotLoader color={'#6400f7'} loading={loading} size={50} />
        </PageLoading>
      ) : (
        <PageContent>{children}</PageContent>
      )}
    </div>
  )
}
