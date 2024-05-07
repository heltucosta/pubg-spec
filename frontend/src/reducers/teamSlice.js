import  { API } from 'aws-amplify'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getTeams = createAsyncThunk('teams/getTeams', async () => {
  try {
    return await API.get('api', '/teams', {})
  } catch (e) {
    console.log('Error (teamSlice.js/getTeams):', e.message)
  }
})

export const getTeam = createAsyncThunk('teams/getTeam', async (teamId) => {
  try {
    return API.get('api', `/teams/${teamId}`, teamId)
  } catch (e) {
    console.log(e)
  }
})

export const createTeam = createAsyncThunk('team/createTeam', async (team) => {
  try {
    console.log('createTeam', team)
    return await API.post('api', '/teams', {body: team})
  } catch (e) {
    console.log(e)
  }
})

export const teamSlice = createSlice({
  name: 'teams',
  initialState: {},
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getTeams.fulfilled, (state, { payload }) => {
        state.teams = payload
      })
      .addCase(getTeam.fulfilled, (state, { payload }) => {
        state.team = payload
      })
      .addCase(createTeam.fulfilled, (state, { payload }) => {
        state.teams = payload
      })
  }
})

export const {} = teamSlice.actions

export default teamSlice.reducer
