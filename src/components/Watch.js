import React from 'react'
import styled from 'styled-components'

import { DateTimeUtility } from '../utility/DateTimeUtility'

class Watch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time: '00:00',
      today: '2018.01.00',
      dayOfTheWeek: ''
    }
  }

  componentDidMount() {
    this.today()
    this.time()
    this.watchDay()
    this.watchTime()
  }

  componentWillUnmount() {
    clearInterval(this.state.timeInterval)
    clearInterval(this.state.dayInterval)
  }

  today() {
    this.setState({
      today: DateTimeUtility.todayDate(),
      dayOfTheWeek: DateTimeUtility.dayOfTheWeek()
    })
  }

  time() {
    this.setState({
      time: DateTimeUtility.time()
    })
  }

  watchDay() {
    const watchDayInterval = setInterval(() => {
      this.today()
    }, 180000) // 1000 * 60 * 3
    this.setState({
      dayInterval: watchDayInterval
    })
  }

  watchTime() {
    const watchTimeInterval = setInterval(() => {
      this.time()
    }, 20000)
    this.setState({
      timeInterval: watchTimeInterval
    })
  }

  render() {
    return (
      <div>
        <div>
          <TimeContent>{this.state.time}</TimeContent>
          <DateContent>
            {this.state.today}
            <span className="unit">{this.state.dayOfTheWeek}</span>
          </DateContent>
        </div>
      </div>
    )
  }
}

const DateContent = styled.div`
  line-height: 1;
  font-size: 24px;
  color: #fff;

  .unit {
    margin-left: 0.3em;
    font-weight: bold;
    font-size: 0.6em;
    color: #fff;
  }
`

const TimeContent = styled.div`
  line-height: 1;
  font-size: 74px;
  color: #fff;
`

export default Watch
