const FlickerClient = require('./clients/FlickerClients')
const ResponseHandler = require('./clients/ResponseHandler')

exports.handler = async (event, context, callback) => {
  if (!event.queryStringParameters.text) {
    return ResponseHandler.BadRequest(callback)
  }

  return FlickerClient.get(event.queryStringParameters.text)
    .then(response => {
      return ResponseHandler.success(callback, response.data)
    })
    .catch(error => {
      return ResponseHandler.error(callback, error)
    })
}
