const axios = require('axios')
require('dotenv').config()

const END_POINT = 'https://api.openweathermap.org/data/2.5/weather'
const { OPEN_WEATHER_MAP_KEY } = process.env

module.exports = class FlickerProvider {
  static get(city) {
    const params = {
      APPID: OPEN_WEATHER_MAP_KEY,
      units: 'metric',
      q: city
    }

    return axios
      .get(END_POINT, { params })
      .then(response => {
        return response
      })
      .catch(error => {
        return error
      })
  }
}
