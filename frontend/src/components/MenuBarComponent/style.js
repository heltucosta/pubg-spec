import { css } from '@emotion/react'

const toolBarStyle = css({
  backgroundColor: '#aeaeae'
})

const titleSt = css({
  display: 'flex',
  fontSize: 24,
  fontWeight: 700,
  color: 'white'
})

const linkStyle = css({
  color: 'white',
  textTransform: 'none',
  cursor: 'pointer',
  padding: 6
})

const activeLinkStyle = css({
  color: 'white',
  textTransform: 'none',
  cursor: 'pointer',
  padding: 6,
  textDecoration: 'underline'
})

export {
  toolBarStyle,
  titleSt,
  linkStyle,
  activeLinkStyle
}
