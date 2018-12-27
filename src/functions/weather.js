const WeatherProvider = require('./provider/WeatherProvider')
const ResponseHandler = require('./provider/ResponseHandler')

exports.handler = async (event, context, callback) => {
  if (!event.queryStringParameters.q) {
    return ResponseHandler.BadRequest(callback)
  }

  return WeatherProvider.get(event.queryStringParameters.q)
    .then(response => {
      return ResponseHandler.success(callback, response.data)
    })
    .catch(error => {
      return ResponseHandler.error(callback, error)
    })
}
