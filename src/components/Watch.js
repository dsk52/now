import React from 'react'
import styled from 'styled-components'

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
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = ('0' + today.getDate()).slice(-2)
    const week = today.getDay()

    const dayOfTheWeeks = [
      'Sun.',
      'Mon.',
      'Tue.',
      'Wed.',
      'Thu.',
      'Fri.',
      'Sat.'
    ]

    this.setState({
      today: `${year}.${month}.${day}`,
      dayOfTheWeek: `${dayOfTheWeeks[week]}`
    })
  }

  time() {
    const day = new Date()
    const hour = day.getHours()
    const minute = ('0' + day.getMinutes()).slice(-2)

    this.setState({
      time: `${hour}:${minute}`
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

  .unit {
    margin-left: 0.3em;
    font-weight: bold;
    font-size: 0.6em;
  }
`

const TimeContent = styled.div`
  line-height: 1;
  font-size: 74px;
`

export default Watch
