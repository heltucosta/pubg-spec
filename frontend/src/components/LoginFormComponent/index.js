/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { useState } from 'react'
import { formStyle, inputStyle, buttonStyle, buttonBoxStyle, progressStyle } from './style'
import { TextField, Button, Grid, CircularProgress } from '@mui/material'
import { Auth } from 'aws-amplify'
import { useFormFields } from '../../lib/formHookLib'
import { validateEmail, validatePassword } from '../../lib/utils'
import { updateUser } from '../../reducers/userSlice'
import { useDispatch } from 'react-redux'

const LoginForm = ({ userHasAuthenticated }) => {
  const dispatch = useDispatch()

  const [fields, handleFormChange] = useFormFields({
    email: '',
    password: ''
  })
  
  //const user = useSelector(state => state.user)

  const [isEmailValid, setEmailValid] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [isPasswordValid, setPasswordValid] = useState(false)
  const [passwordError, setPasswordError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailChange = (e) => {
    handleFormChange(e)
    setEmailValid(validateEmail(e.target.value))
  }

  const handlePasswordChange = (e) => {
    handleFormChange(e)
    setPasswordValid(validatePassword(e.target.value))
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (isEmailValid && isPasswordValid) {
      try {
        await Auth.signIn(fields.email, fields.password)
        dispatch(updateUser({email: fields.email, password: fields.password }))
        userHasAuthenticated(true)
      } catch (e) {
        alert(e)
        setIsLoading(false)
      }
    } else {
      setEmailError('Please provide a valid email address')
      setPasswordError('Password must be 8+, upper, lower, numbers and special characters')
      setIsLoading(false)
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item md={2} />
      <Grid item xs={12} md={8}>
        <form css={formStyle} onSubmit={submitHandler}>
          <TextField
            autoFocus
            error={!!emailError.length}
            helperText={emailError}
            css={inputStyle}
            id='email'
            label='Email address'
            type='email'
            fullWidth
            variant='outlined'
            onChange={handleEmailChange}
          />
          <TextField
            error={!!passwordError.length}
            helperText={passwordError}
            css={inputStyle}
            id='password'
            label='Password'
            type='password'
            fullWidth
            variant='outlined'
            onChange={handlePasswordChange}
          />
          <div css={buttonBoxStyle}>
            <Button
              disabled={isLoading}
              css={buttonStyle}
              variant='contained'
              type='submit'
              endIcon={isLoading && <CircularProgress css={progressStyle} size={20} />}
             >Login</Button>
          </div>
        </form>
      </Grid>
      <Grid item md={2} />
    </Grid>
  )
}

export default LoginForm
