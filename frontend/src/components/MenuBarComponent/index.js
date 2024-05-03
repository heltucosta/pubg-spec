/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { titleSt, linkStyle, toolBarStyle } from './style'
import { Box, AppBar, Toolbar, Typography, Link } from '@mui/material'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom' 

const MenuBar = ({ isAuthenticated, userHasAuthenticated }) => {
  // const path = window.location.pathname.split('/')[1]
  const navigate = useNavigate()

  const handleLogout = async () => {
    await Auth.signOut()
    userHasAuthenticated(false)

    navigate('/login')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar css={toolBarStyle}>
          <Typography css={titleSt} variant='h1' component='div' sx={{ flexGrow: 1}}>
            <Link css={linkStyle} href='/' underline='none'>Scratch</Link>
          </Typography>
          {isAuthenticated ? (
                <Link css={linkStyle} onClick={handleLogout} underline='hover'>Logout</Link>
            ) : (
              <>
                <Link css={linkStyle} href='/login' underline='hover'>Login</Link>
                <Link css={linkStyle} href='/register' underline='hover'>Sign up</Link>
              </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MenuBar

