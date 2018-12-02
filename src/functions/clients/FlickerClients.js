const axios = require('axios')
require('dotenv').config()

const END_POINT = 'https://api.flickr.com/services/rest'
const { FLICKER_KEY } = process.env

module.exports = class FlickerClient {
  static get(searchText) {
    const params = {
      api_key: FLICKER_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: searchText,
      extras: 'url_l, owner_name',
      method: 'flickr.photos.search',
      per_page: 1
    }

    return axios.get(END_POINT, { params }).then(response => {
      return response
    })
  }
}
