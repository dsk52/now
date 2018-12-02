const fetch = require('node-fetch')
const { URL, URLSearchParams } = require('url')

const END_POINT = 'https://api.flickr.com/services/rest'
const API_KEY = process.env.REACT_APP_FLICKER_KEY

module.exports = class FlickerClient {
  static get(searchText) {
    const url = new URL(END_POINT)
    const params = {
      api_key: API_KEY,
      format: 'json',
      nojsoncallback: 1,
      // text: text,
      extras: 'url_l, owner_name',
      method: 'flickr.photos.search',
      per_page: 1
    }
    params.text = searchText
    url.search = new URLSearchParams(params)

    return fetch(url, {
      method: 'get',
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
