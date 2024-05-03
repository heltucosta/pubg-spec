import * as React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { NotesCreateForm } from '../components'

const CreateNotesPage = () => {

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography align='left' variant='h1'>New note</Typography>
          <NotesCreateForm />
        </Grid>
      </Grid>
    </Container>
  )
}

export default CreateNotesPage
