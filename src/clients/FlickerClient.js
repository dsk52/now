import Server from '../service/Server'
import ErrorService from '../service/ErrorService'

import { config } from '../config'

class FlickerClient {
  static get(component, params) {
    new Server().get(
      `${config.FUNCTION_URL}/flicker`,
      params,
      response => {
        if (response.data.photos.photo.length) {
          component.setState({
            photos: response.data.photos
          })
        }
      },
      ErrorService.handler
    )
  }
}

export default FlickerClient
