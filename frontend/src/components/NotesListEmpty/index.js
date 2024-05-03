/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

const NotesListEmptyComponent = () => {
  const navigate = useNavigate()

  const currentNote = useSelector(state => state.notes.currentNote)
  const notes = useSelector(state => state.notes.allNotes)

  const handleClick =  () => {
    navigate('/notes/create')
  }

  return !currentNote && notes.length === 0 && (
    <Typography variant='h3' onClick={handleClick}>Create new note</Typography>
  )
}

export default NotesListEmptyComponent

