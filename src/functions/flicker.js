const FlickerProvider = require('./provider/FlickerProvider')
const ResponseHandler = require('./provider/ResponseHandler')

exports.handler = async (event, context, callback) => {
  if (!event.queryStringParameters.text) {
    return ResponseHandler.BadRequest(callback)
  }

  return FlickerProvider.get(event.queryStringParameters.text)
    .then(response => {
      return ResponseHandler.success(callback, response.data)
    })
    .catch(error => {
      return ResponseHandler.error(callback, error)
    })
}
