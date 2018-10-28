import Server from '../service/Server'
import ErrorService from '../service/ErrorService'

class WeatherClient {
  static get(component, params, after) {
    new Server().get(
      'https://api.openweathermap.org/data/2.5/weather',
      params,
      response => {
        component.setState(
          {
            weather: response.data
          },
          () => {
            after()
          }
        )
      },
      ErrorService.handler
    )
  }
}

export default WeatherClient
