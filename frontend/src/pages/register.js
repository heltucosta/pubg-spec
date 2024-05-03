import * as React from 'react'
import { useAppContext } from '../lib/contextLib'
import { Container, Grid, Typography } from '@mui/material'
import { RegisterForm } from '../components'

const RegisterPage = () => {
  const { userHasAuthenticated } = useAppContext()

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h1'>Scratch Register</Typography>
          <RegisterForm userHasAuthenticated={userHasAuthenticated}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default RegisterPage

