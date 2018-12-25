const ResponseHandler = require('./provider/ResponseHandler')

exports.handler = function(event, context, callback) {
  ResponseHandler.success(callback, { message: 'Hello, World' })
}
