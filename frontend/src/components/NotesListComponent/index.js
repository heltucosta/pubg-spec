/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Paper, Typography } from '@mui/material'
import { setCurrentNote } from '../../reducers/notesSlice'
import { parseNoteTitle, parseNoteDate } from '../../lib/utils'

const NotesListComponent = () => {
  const dispatch = useDispatch()
  const currentNote = useSelector(state => state.notes.currentNote)
  const notes = useSelector(state => state.notes.allNotes)

  const handleNoteClick =  note => {
    dispatch(setCurrentNote(note))
  }

  return !currentNote && notes.length > 0 && notes.map((note, id) => (
    <Grid key={id} item xs={6} md={4}>
      <Paper onClick={e => handleNoteClick(note)}>
        <Typography variant='h3'>{parseNoteTitle(note)}</Typography>
        <Typography>Date: {parseNoteDate(note)}</Typography>
      </Paper>
    </Grid>
  ))
}

export default NotesListComponent
