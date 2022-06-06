import React from 'react'

import {NavBarMenu} from './components'
import useSignOut from 'hooks/mutations/auth/useSignOut'

import HomeIcon from '@mui/icons-material/Home'
import {Typography} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import GroupIcon from '@mui/icons-material/Group'
import LogoutIcon from '@mui/icons-material/Logout'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
  const NavbarData = [
    {
      path: '/',
      icon: <HomeIcon className="text-navbar-color" fontSize="large" />,
      text: 'Projects'
    },
    {
      path: '/profile',
      icon: (
        <AccountCircleIcon className="text-navbar-color" fontSize="large" />
      ),
      text: 'Profile'
    },
    {
      path: '/users',
      icon: <GroupIcon className="text-navbar-color" fontSize="large" />,
      text: 'All users'
    }
  ]

  const {signOut} = useSignOut()
  function handleSignOut() {
    signOut(false)
  }

  return (
    <div className="bg-body-primary flex flex-col justify-start">
      <NavBarMenu>
        {NavbarData.map((item, index) => (
          <NavLink
            exact
            to={item.path}
            className="mx-2 my-3 p-3 rounded-lg flex items-center whitespace-nowrap text-navbar-color text-lg"
            key={index}
          >
            {item.icon}
            <span className="pl-4 ">{item.text}</span>
          </NavLink>
        ))}
      </NavBarMenu>
      <div className="mt-auto px-3 text-navbar-color">
        <Typography variant="h6" component="h3">
          Task tracker <br />
          <a
            href="http://t.me/hoodraised_dust"
            className="text-sm text-[#96c2b8]"
          >
            by hxxdraised
          </a>
        </Typography>
        <hr className="my-3 border-[#96c2b8]" />
        <button className="px-5 py-4 w-full" onClick={() => handleSignOut()}>
          {<LogoutIcon className="text-navbar-color w-[30px] h-[40px]" />}
        </button>
      </div>
    </div>
  )
}
