import React from 'react'
import './styles.css'
import IMAGE from './logo.png'
import LOGO from './logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  const x = async () => {
    await console.log()
  }

  x()

  return (
    <>
      <h1>
        Typescript1 - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <ClickCounter />
      <img src={IMAGE} alt="logo" width="300" height="300" />
      <img src={LOGO} alt="logo" width="300" />
    </>
  )
}
