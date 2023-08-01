import logo from './logo.svg'
import './App.css'
import React from 'react'

import Portfolio from './Portfolio'
import Header from './Header'
import NavBar from './Nav'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Portfolio />
    </div>
  )
}

export default App
