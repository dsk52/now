import Server from '../service/Server'
import ErrorService from '../service/ErrorService'

import { config } from '../config'

const { FLICKER_KEY } = process.env

class FlickerClient {
  static get(component, keyword) {
    const query = {
      api_key: FLICKER_KEY,
      format: 'json',
      nojsoncallback: 1,
      extras: 'url_l, owner_name',
      method: 'flickr.photos.search',
      per_page: 1
    }

    query.text = keyword

    new Server().get(
      `${config.FUNCTION_URL}/flicker`,
      query,
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
