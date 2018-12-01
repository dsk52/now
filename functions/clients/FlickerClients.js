const fetch = require('node-fetch')

const END_POINT = 'https://api.flickr.com/services/rest'
const API_KEY = process.env.REACT_APP_FLICKER_KEY

const params = {
  api_key: API_KEY,
  format: 'json',
  nojsoncallback: 1,
  // text: text,
  extras: 'url_l, owner_name',
  method: 'flickr.photos.search',
  per_page: 1
}

module.exports = class FlickerClient {
  static get(params) {
    return fetch(END_POINT, {
      method: 'get',
      body: JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        return json
      })
      .catch(error => {
        console.error(error)
        // return throw new
      })
  }
}
