/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { useState } from 'react'
import { formStyle, inputStyle, buttonStyle, buttonBoxStyle, progressStyle } from '../LoginFormComponent/style'
import { resendLinkStyle } from './style'
import { TextField, Button, Grid, CircularProgress, Link } from '@mui/material'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import { useFormFields } from '../../lib/formHookLib'
import { validateEmail, validatePassword } from '../../lib/utils'

const RegisterForm = ({ userHasAuthenticated }) => {
  const [fields, handleFormChange] = useFormFields({
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: ''
  })
  const [isEmailValid, setEmailValid] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [isPasswordValid, setPasswordValid] = useState(false)
  const [isConfirmPasswordValid, setConfirmPasswordValid] = useState(false)
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [confirmationCodeError, setConfirmCodeError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [newUser, setNewUser] = useState(null)

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    handleFormChange(e)
    setEmailValid(validateEmail(e.target.value))
    setEmailError('')
  }

  const handlePasswordChange = (e) => {
    handleFormChange(e)
    setPasswordValid(validatePassword(e.target.value))
    setPasswordError('')
  }

  const handleConfirmPasswordChange = (e) => {
    handleFormChange(e)
    setConfirmPasswordValid(validatePassword(e.target.value))
    setConfirmPasswordError('')
  }

  const validateForm = () => {
    return isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      fields.password === fields.confirmPassword
  }

  const resendConfirmationCodeHandler = async () => {
    try {
      const res = await Auth.resendSignUp(fields.email)
      setConfirmCodeError('Code resent, check your spam box')
    } catch (e) {
      alert(e)
    }
  }
  
  const submitHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (validateForm()) {
      try {
        const registerUser = await Auth.signUp(fields.email, fields.password)
        
        setIsLoading(false)
        setNewUser(registerUser)
      } catch (e) {
        alert(e)
        setIsLoading(false)
      }
    } else {
      setEmailError(isEmailValid ? '' : 'Please provide a valid email address')
      setPasswordError(isPasswordValid ? '': 'Password must be 8+, upper, lower, numbers and special characters')
      setConfirmPasswordError(isConfirmPasswordValid ? '' : 'Passwords must match!')
      setIsLoading(false)
    }
  }

  const confirmationHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode)
      await Auth.signIn(fields.email, fields.password)
      userHasAuthenticated(true)
      navigate('/')
    } catch (e) {
      alert(e)
      setIsLoading(false)
    }
  }
  
  const renderConfirmationForm = () => (
    <Grid container spacing={2}>
      <Grid item md={2} />
      <Grid item xs={12} md={8}>
        <form css={formStyle} onSubmit={confirmationHandler}>
          <TextField
            autoFocus
            helperText={confirmationCodeError}
            css={inputStyle}
            id='confirmationCode'
            label='Confirmation code'
            type='text'
            fullWidth
            variant='outlined'
            onChange={handleFormChange}
            value={fields.confirmationCode}
          />
          <Link css={resendLinkStyle} underline='always' variant='p' onClick={resendConfirmationCodeHandler}>Resend verification code</Link>
          <div css={buttonBoxStyle}>
            <Button
              disabled={isLoading}
              css={buttonStyle}
              variant='contained'
              type='submit'
              endIcon={isLoading && <CircularProgress css={progressStyle} size={20} />}
             >Verify</Button>
          </div>
        </form>
      </Grid>
      <Grid item md={2} />
    </Grid>
  )

  const renderRegisterForm = () => (
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
            value={fields.email}
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
            value={fields.password}
          />
          <TextField
            error={!!confirmPasswordError.length}
            helperText={confirmPasswordError}
            css={inputStyle}
            id='confirmPassword'
            label='Confirm password'
            type='password'
            fullWidth
            variant='outlined'
            onChange={handleConfirmPasswordChange}
            value={fields.confirmPassword}
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

  return newUser === null ? renderRegisterForm() : renderConfirmationForm()
}

export default RegisterForm

