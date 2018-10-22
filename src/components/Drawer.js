import React from 'react'
import styled from 'styled-components'

class Drawer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  handleOpen() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
    } else {
      this.setState({ isOpen: true })
    }
  }

  render() {
    return (
      <DrawerBackground className={this.state.isOpen ? 'isOpen' : ''}>
        <Handle
          onClick={event => {
            this.handleOpen()
          }}
        >
          <span className="text">&lt;</span>
        </Handle>
        <DrawerContent>aaa</DrawerContent>
      </DrawerBackground>
    )
  }
}

export default Drawer

const DrawerBackground = styled.div`
  display: block;
  width: 0;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  background-color: rgba(200, 200, 200, 0.6);
  /* overflow: hidden; */
  transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;

  &.isOpen {
    width: 80%;
  }
`

const DrawerContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 4%;
  box-sizing: border-box;
`

const Handle = styled.div`
  display: table;
  background-color: rgba(200, 200, 200, 0.6);
  width: 30px;
  height: 80px;
  border-radius: 5px 0 0 5px;
  position: absolute;
  top: 50%;
  left: -30px;
  margin-top: -40px;

  .text {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    margin-top: -10px;
    margin-left: 20px;
    color: #fff;
    cursor: pointer;
  }
`
