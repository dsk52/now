const FlickerClient = require('./clients/FlickerClients')
const ResponseHandler = require('./clients/ResponseHandler')

exports.handler = async (event, context, callback) => {
  if (!event.queryStringParameters.text) {
    return ResponseHandler.BadRequest(callback)
  }

  FlickerClient.get(event.queryStringParameters.text)
    .then(response => {
      ResponseHandler.success(callback, response.data)
    })
    .catch(error => {
      ResponseHandler.error(callback, error)
    })
}
