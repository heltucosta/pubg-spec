import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    updateUser: (state, { payload }) => {
      state.user = payload
    }
  },
})

export const { updateUser } = userSlice.actions

export default userSlice.reducer
