import Server from '../service/Server'
import ErrorService from '../service/ErrorService'

class FlickerClient {
  static get(component, params) {
    new Server().get(
      'https://api.flickr.com/services/rest',
      params,
      response => {
        component.setState({
          photos: response.data.photos
        })
      },
      ErrorService.handler
    )
  }
}

export default FlickerClient
