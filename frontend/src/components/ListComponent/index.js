/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { useEffect } from 'react'
import { Grid, Button, Typography } from '@mui/material'
import { headerRow, evenRow, oddRow } from './style'

const ListComponent = ({ items, fields }) => {
  const cellSize = 12/fields.length
  console.log('cellSize', cellSize)

  return (
    <Grid container>
      {fields.length && fields.map(field => (
        <Grid css={headerRow} item xs={Math.round(cellSize)}>
          <Typography variant='h5'>{field}</Typography>
        </Grid>
      ))}
      {items.length && items.map((item,idx) => {
        return fields.map(field => (
          <Grid css={idx%2 == 0 ? evenRow : oddRow}item xs={Math.round(cellSize)}>
            <Typography>{item[field]}</Typography>
          </Grid>
        ))
      })}
    </Grid>
  )
}

export default ListComponent
