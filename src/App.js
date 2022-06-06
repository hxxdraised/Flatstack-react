import {Routes, Route} from 'react-router-dom'

import {AuthUser} from 'global/AuthUser'
import EnvSpecificRouter from 'components/EnvSpecificRouter'

import Home from 'pages/home'
import Login from 'pages/login'
import Registration from 'pages/registration'
import PasswordRecovery from 'pages/passwordRecovery'
import Users from 'pages/users'
import Profile from 'pages/profile'

function App() {
  return (
    <AuthUser>
      <EnvSpecificRouter>
        <Routes className="bg-body-background flex flex-row h-[100vh] w-full">
          <Route path={'/'} element={<Home />} />
          <Route path={'/users'} element={<Users />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route exact path={'/login'} element={<Login />} />
          <Route path={'/login/recovery'} element={<PasswordRecovery />} />
          <Route path={'/registration'} element={<Registration />} />
        </Routes>
      </EnvSpecificRouter>
    </AuthUser>
  )
}

export default App
