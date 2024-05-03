/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { attachmentBoxStyle, btnBoxStyle, btnStyle } from './style'
import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, TextField, Input, Link, Grid, Button, CircularProgress } from '@mui/material'
import { deleteUserNote, clearCurrentNote, getUserNotes } from '../../reducers/notesSlice'

const NoteEditComponent = () => {
  const dispatch = useDispatch()

  const currentNote = useSelector(state => state.notes.currentNote)
  const deleteUserNoteStatus = useSelector(state => state.notes.deleteUserNoteStatus)

  const newFileRef = useRef(null)

  const [newContent, setNewContent] = useState(null)

  const handleContentChange = e => {
    setNewContent(e.target.value)
  }

  const handleAttachmentChange = e => {
    if (e.currentTarget.files === null) return
    newFileRef.current = e.currentTarget.files[0]
  }

  const handleSubmit = e => {
    console.log('submit form', newContent, newFileRef)
    e.preventDefault()
  }

  const handleNoteDelete = () => {
    dispatch(deleteUserNote(currentNote.noteId))
  }

  useEffect(() => {
    if (deleteUserNoteStatus === 'done') {
      dispatch(clearCurrentNote())
    }
  }, [deleteUserNoteStatus, dispatch])

  return currentNote && (
    <Grid item xs={12}>
      <form onSubmit={handleSubmit}>
        <TextField
          id='newContent'
          fullWidth
          multiline
          minRows={5}
          value={newContent ? newContent :  currentNote.content}
          onChange={handleContentChange}
          type='text' />
        <div css={attachmentBoxStyle}>
          <Typography variant='h5' textAlign='start'>Attachment</Typography>
          <Link href='#'>{newFileRef?.current?.name || currentNote.noteId}</Link>
        </div>
        <Input
          id='newFile'
          label='Attachment'
          type='file'
          fullWidth
          variant='outlined'
          onChange={handleAttachmentChange}
        />
        <div css={btnBoxStyle}>
          <Button
            css={btnStyle}
            variant='contained'
            color='error'
            onClick={handleNoteDelete}
            endIcon={deleteUserNoteStatus === 'loading' && <CircularProgress />}
          >Delete
          </Button>
          <Button
            css={btnStyle}
            variant='contained'
            color='primary'
            type='submit'
          >Save
          </Button>
        </div>
      </form>
    </Grid>
  )
}

export default NoteEditComponent


