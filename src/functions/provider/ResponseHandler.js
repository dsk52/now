module.exports = class ResponseHandler {
  static success(callback, dto) {
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(dto)
    })
  }

  static BadRequest(callback) {
    callback(null, {
      statusCode: 401,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ message: 'Bad Request' })
    })
  }

  static error(callback, error) {
    callback(null, {
      statusCode: error.response.status,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ message: error.response.statusText })
    })
  }
}
