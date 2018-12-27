import Server from '../service/Server'
import ErrorService from '../service/ErrorService'

import { config } from '../config'

class WeatherClient {
  static get(component, params, after) {
    new Server().get(
      `${config.FUNCTION_URL}/weather`,
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
