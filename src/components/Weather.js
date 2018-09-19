import React from "react"
import WeatherClient from '../clients/WeatherClient'

const API_KEY = "26aec3d9c9d062a031cf030f313cf02b"

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {
        name: '',
        main: {
          temp: 0,
          humidity: 0
        },
        weather: [{
          main: '',
          description: '',
          icon: '10n'
        }]
      }
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    const params = {
      q: "Osaka-shi,JP",
      units: 'metric',
      APPID: API_KEY
    }
    WeatherClient.get(this, params)
  }

  render() {
    return (
      <section>
        <h1 className="area">{this.state.weather.name}</h1>
        <div className="icon">
          <img src={`http://openweathermap.org/img/w/${this.state.weather.weather[0].icon}.png`} alt={`${this.state.weather.weather[0].main}`} style={{width: '100px', height: '100px'}}/>
        </div>
        <div>
          <p>気温 {this.state.weather.main.temp}℃ (最高 {this.state.weather.main.temp_max}℃, 最低 {this.state.weather.main.temp_min}℃)</p>
          <p>降水確率 {this.state.weather.main.humidity}%</p>
        </div>
        <p><small>{this.state.weather.lastupdate}</small></p>
      </section>
    )
  }
}

export default Weather