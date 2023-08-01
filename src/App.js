import './App.css'
import React from 'react'

import Portfolio from './Components/Portfolio'
import Header from './Components/Header'
import NavBar from './Components/Nav'

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
