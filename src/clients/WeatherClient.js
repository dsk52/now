import Server from '../service/Server'
import ErrorService from '../service/ErrorService'

class WeatherClient {
  static get(component, params) {
    new Server().get(
      'http://api.openweathermap.org/data/2.5/weather',
      params,
      response => {
        component.setState(
          {
            weather: response.data
          },
          () => {
            console.log(response.data)
          }
        )
      },
      ErrorService.handler
    )
  }
}

export default WeatherClient
