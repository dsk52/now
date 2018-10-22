import React from 'react'
import styled from 'styled-components'
import WeatherClient from '../clients/WeatherClient'

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_KEY

class Weather extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: {
        name: '',
        main: {
          temp: 0,
          humidity: 0
        },
        weather: [
          {
            main: '',
            description: '',
            icon: '10n'
          }
        ]
      }
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    const params = {
      q: 'Osaka-shi,JP',
      units: 'metric',
      APPID: API_KEY
    }
    WeatherClient.get(this, params)
  }

  render() {
    return (
      <section>
        <WeatherDetail>
          <h1 className="area">{this.state.weather.name}</h1>
          <WeatherIcon>
            <img
              src={`http://openweathermap.org/img/w/${
                this.state.weather.weather[0].icon
              }.png`}
              alt={`${this.state.weather.weather[0].main}`}
            />
          </WeatherIcon>
          <div>
            <Temp>
              <div className="current">
                <svg className="icon icon-fire">
                  <use xlinkHref="#icon-fire">
                    <symbol id="icon-fire" viewBox="0 0 32 32">
                      <title>fire</title>
                      <path d="M10.031 32c-2.133-4.438-0.997-6.981 0.642-9.376 1.795-2.624 2.258-5.221 2.258-5.221s1.411 1.834 0.847 4.703c2.493-2.775 2.963-7.196 2.587-8.889 5.635 3.938 8.043 12.464 4.798 18.783 17.262-9.767 4.294-24.38 2.036-26.027 0.753 1.646 0.895 4.433-0.625 5.785-2.573-9.759-8.937-11.759-8.937-11.759 0.753 5.033-2.728 10.536-6.084 14.648-0.118-2.007-0.243-3.392-1.298-5.312-0.237 3.646-3.023 6.617-3.777 10.27-1.022 4.946 0.765 8.568 7.555 12.394z" />
                    </symbol>
                  </use>
                </svg>
                {this.state.weather.main.temp}℃
              </div>
              {/* <div className="detail">
              最高 {this.state.weather.main.temp_max}℃<br />
              最低 {this.state.weather.main.temp_min}℃
            </div> */}
            </Temp>
            <Humidity>
              <svg className="icon icon-droplet">
                <use xlinkHref="#icon-droplet">
                  <symbol id="icon-droplet" viewBox="0 0 32 32">
                    <title>droplet</title>
                    <path d="M27.020 14.786c-2.055-5.732-6.41-10.88-11.020-14.786-4.61 3.907-8.965 9.054-11.020 14.786-1.271 3.545-1.396 7.393 0.393 10.794 2.058 3.911 6.207 6.42 10.626 6.42s8.569-2.509 10.626-6.42c1.79-3.401 1.664-7.249 0.393-10.794zM23.086 23.717c-1.369 2.602-4.15 4.283-7.086 4.283-1.723 0-3.391-0.579-4.753-1.583 0.414 0.054 0.832 0.083 1.254 0.083 3.67 0 7.146-2.1 8.856-5.351 1.402-2.665 1.281-5.433 0.746-7.636 0.455 0.88 0.841 1.756 1.151 2.623 0.706 1.971 1.251 4.886-0.168 7.581z" />
                  </symbol>
                </use>
              </svg>
              {this.state.weather.main.humidity}%
            </Humidity>
          </div>
        </WeatherDetail>
      </section>
    )
  }
}

const WeatherDetail = styled.div`
  margin-top: 80px;

  .area {
    margin-bottom: 0;
    line-height: 1;
    color: #fff;
  }

  > div {
    display: inline-block;
    vertical-align: middle;

    & + div {
      margin-left: 10px;
    }
  }
`

const WeatherIcon = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`

const Temp = styled.div`
  .current {
    font-size: 21px;
    color: #fff;
  }
  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
  .detail {
    font-size: 0.8em;
    color: #fff;
  }
`

const Humidity = styled.div`
  font-size: 21px;
  color: #fff;

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
`

export default Weather
