import React, { Component } from 'react'
import './App.css'
import Weather from './components/Weather'
import Watch from './components/Watch'
import Background from './components/Background'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Watch />
        <Weather />
        <Background />
      </div>
    )
  }
}

export default App
