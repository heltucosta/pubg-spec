/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { titleSt, linkStyle, toolBarStyle, activeLinkStyle } from './style'
import { Box, AppBar, Toolbar, Typography, Link } from '@mui/material'
//import { useNavigate } from 'react-router-dom' 
import { getActiveLink } from '../../lib/utils'

const MenuBar = () => {
  const path = window.location.pathname.split('/')[1]
  //const navigate = useNavigate()
  const tourneyLinkStyle = getActiveLink(path, '') ? activeLinkStyle : linkStyle
  const teamLinkStyle = getActiveLink(path, 'teams') ? activeLinkStyle : linkStyle
  const playerLinkStyle = getActiveLink(path, 'players') ? activeLinkStyle : linkStyle

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar css={toolBarStyle}>
          <Typography css={titleSt} variant='h1' component='div' sx={{ flexGrow: 1}}>
            <Link css={linkStyle} href='/' underline='none'>PUBG Spec Dashboard</Link>
          </Typography>
          <Link css={tourneyLinkStyle} href='/' underline='hover'>Tourneys</Link>
          <Link css={teamLinkStyle} href='/teams' underline='hover'>Teams</Link>
          <Link css={playerLinkStyle} href='/players' underline='hover'>Players</Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MenuBar

