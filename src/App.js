import React, { Component } from 'react'
import styled from 'styled-components'

import Weather from './components/Weather'
import Watch from './components/Watch'
import Background from './components/Background'
import Drawer from './components/Drawer'
import Qiita from './components/Qiita'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NowWrapper>
          <div className="content">
            <Watch />
            <Weather />
          </div>
          <div className="background">
            <Background />
          </div>
          <Drawer>
            <Qiita />
          </Drawer>
        </NowWrapper>
      </div>
    )
  }
}

export default App

const NowWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .content,
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .content {
    margin: 2%;
    z-index: 2;
  }

  .background {
    z-index: 1;
  }
`
