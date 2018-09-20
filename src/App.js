import React, { Component } from 'react'
import './App.css'
import Weather from './components/Weather'
import Watch from './components/Watch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Watch />
        <Weather />
      </div>
    )
  }
}

export default App
