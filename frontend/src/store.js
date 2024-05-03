import { configureStore } from '@reduxjs/toolkit'
import notesSlice from './reducers/notesSlice'
import userReducer from './reducers/userSlice'
import teamSlice from './reducers/teamSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    notes: notesSlice,
    teams: teamSlice
  },
})
