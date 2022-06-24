import React from 'react'
import ReactDOM from 'react-dom'
import Container from './components/Container'
import './index.less'

ReactDOM.render(
  <Container />,
  document.querySelector('#root'),
)

//Unit tests -> Component
//Integration tests -> Components talking to each other
//End to end tests -> Entire use flow
