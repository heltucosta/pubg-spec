/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { useState, useRef } from 'react'
import { formStyle } from './style'
import { TextField, Button, Grid, CircularProgress, Input } from '@mui/material'
import { useFormFields } from '../../lib/formHookLib'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUserNote } from '../../reducers/notesSlice'

const NotesCreateForm = ({ userHasAuthenticated }) => {
  const dispatch = useDispatch()

  const file = useRef(null)
  const navigate = useNavigate()

  const [fields, handleFormChange] = useFormFields({
    content: ''
  })

  const [isLoading, setIsloading] = useState(false)

  const handleFileChange = (e) => {
    if (e.currentTarget.files === null) return
    file.current = e.currentTarget.files[0]
  }

  const submitHandler = async e => {
    e.preventDefault()
    setIsloading(true)

    try {
      dispatch(createUserNote({ content: fields.content, file: file.current }))
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form css={formStyle} onSubmit={submitHandler}>
          <TextField
            autoFocus
            id='content'
            label='Note content'
            type='text'
            fullWidth
            variant='outlined'
            multiline
            minRows={5}
            onChange={handleFormChange}
            value={fields.content}
          />
          <Input
            id='attachment'
            label='Attachment'
            type='file'
            fullWidth
            variant='outlined'
            onChange={handleFileChange}
          />
          <div>
            <Button
              variant='contained'
              type='submit'
              endIcon={isLoading && <CircularProgress size={20} />}
             >Create note</Button>
          </div>
        </form>
      </Grid>
    </Grid>
  )
}

export default NotesCreateForm
