import axios from 'axios'

class Server {
  constructor () {
    axios.create({
      timeout: 5000
    })
  }

  post (url, params, successHandler, errorHandler) {
    axios.post(url, params)
      .then((response) => {
        successHandler(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  get (url, querys, successHandler, errorHandler) {
    axios.get(url, {
      params: querys
    })
      .then((response) => {
        successHandler(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default Server
