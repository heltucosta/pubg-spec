import { API, Storage } from 'aws-amplify'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const deleteUserNote = createAsyncThunk('notes/deleteUserNote', async (noteId) => {
  try {
    return await API.del('notes', `/notes/${noteId}`)
  } catch (e) {
    console.log(e)
  }
})

export const getUserNotes = createAsyncThunk('notes/getUserNotes', async () => {
  try {
    const userNotes = await API.get('notes', '/notes', {})
    return userNotes
  } catch (e) {
    console.log(e)
  }
})

export const createUserNote = createAsyncThunk('notes/createUserNote', async ({ content, file }) => {
  try {
    let attachment = null
    if (file) {
      const filename = `${Date.now()}-${file.name}`
      const stored = file
        ? await Storage.vault.put(filename, file, { contentType: file.type })
        : undefined

      attachment = stored.key
    }

    const note = {
      content,
      attachment
    }
    const result = await API.post('notes', '/notes', {
      body: note
    })

    return result
  } catch (e) {
    console.log(e)
  }
})

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    allNotes: [],
    note: null,
    currentNote: null
  },
  reducers: {
    setCurrentNote: (state, { payload }) => {
      state.currentNote = payload
    },
    clearCurrentNote: (state, _) => {
      state.currentNote = null
    }
  },
  extraReducers(builder) {
    builder
     .addCase(createUserNote.fulfilled, (state, { payload }) => {
        state.note = payload
        state.allNotes.push(payload)
     })
     .addCase(getUserNotes.pending, (state, _) => {
       state.getUserNotesStatus = 'loading'
     })
     .addCase(getUserNotes.fulfilled, (state, { payload }) => {
       state.getUserNotesStatus = 'done'
       state.allNotes = payload
     })
     .addCase(deleteUserNote.pending, (state, _) => {
       state.deleteUserNoteStatus = 'loading'
     })
     .addCase(deleteUserNote.fulfilled, (state, { payload }) => {
       state.deleteUserNoteStatus = 'done'
       state.allNotes = payload
     })
  }
})

export const { setCurrentNote, clearCurrentNote } = notesSlice.actions

export default notesSlice.reducer

