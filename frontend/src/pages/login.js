import * as React from 'react'
import { useAppContext } from '../lib/contextLib'
import { Container, Grid, Typography } from '@mui/material'
import { LoginForm } from '../components'

const LoginPage = () => {
  const { userHasAuthenticated } = useAppContext()

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h1'>Scratch Login</Typography>
          <LoginForm userHasAuthenticated={userHasAuthenticated}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoginPage
