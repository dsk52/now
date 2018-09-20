import React from 'react'

class Watch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time: "00:00",
      today: '2018.01.00'
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
    const day = today.getDate()
    const week = today.getDay()

    const dayOfTheWeeks = ["日", "月", "火", "水", "木", "金", "土"]

    this.setState({
      today: `${year}.${month}.${day} ${dayOfTheWeeks[week]}`
    })
  }

  time() {
    const day = new Date()
    const hour = day.getHours();
    const minute = day.getMinutes();

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
      console.log('getTime');
    }, 30000)
    this.setState({
      timeInterval: watchTimeInterval
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.today}<br/>
        {this.state.time}</p>
      </div>
    )
  }
}

export default Watch