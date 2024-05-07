/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { useEffect } from 'react'
 import { css } from '@emotion/react'
import { Grid, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getTeams, createTeam, getTeam } from '../reducers/teamSlice'
import { ListComponent } from '../components'
import { List } from '@mui/icons-material'

const titleBoxStyle = css({
  position: 'relative'
})

const backBtnStyle = css({
  position: 'absolute',
  top: 16,
  left: 0,
  border: 'none',
  color: 'black',
  '&:hover': {
    borderColor: 'black',
    backgroundColor: '#ededed'
  }
})

const HomePage = () => {
  const dispatch = useDispatch()
  const teams = useSelector(state => state.teams.teams)
  useEffect(() => {
    dispatch(getTeams())
  }, [])

  const handleCreateTeam = () => {
    const team = {
      name: 'Shoot to Kill',
      logo: 'https://img-cdn.hltv.org/teamlogo/RWbHH6RA8uGwJurGeLFvSr.png?ixlib=java-2.1.0&w=100&s=10ff29ff632e0bd82922f4fcd83f930f',
      image: '',
      players: [
        "Guilherme 'guizeraa' Barbosa",
        "Lucas 'lfp1' Prado",
        "Hailton 'vhz' Moraes da Cruz Junior",
        "Guilherme 'rbN' Carvalho",
      ]
    }
    dispatch(createTeam(team))
  }

  const handleTeamClick = (teamId) => {
    dispatch(getTeam(teamId))
  }


  return (
    <Grid container>
      <Grid item xs={12}>
        <div>
          <h1>Times registrados</h1>
          <ListComponent
            items={teams}
            fields={['name', 'players', 'logo', 'image']}
          />
          <Button onClick={handleCreateTeam} variant='contained'>Create team</Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default HomePage
