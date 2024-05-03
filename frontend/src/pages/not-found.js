/** @jsxImportSource @emotion/react */
import * as React from 'react'
 import { css } from '@emotion/react'
import { Container, Grid, Typography, Link } from '@mui/material'

const titleStyle = css({
  paddingTop: 18
})

const linkStyle = css({
  color: '#000',
  textDecorationColor: '#000'
})

const NotFoundPage = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography css={titleStyle} variant='h3'>Sorry, page not found!</Typography>
          <Link css={linkStyle} underline='always' href='/'>Go back to home page</Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NotFoundPage
