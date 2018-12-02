const functions = require('firebase-functions')

const FlickerClient = require('./clients/FlickerClients')
const HttpHandler = require('./clients/HttpHandler')

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.json({
    message: 'helloWorld'
  })
})

exports.flicker = functions.https.onRequest((request, response) => {
  if (!request.query.text) {
    return HttpHandler.BadRequest(response)
  }

  const res = FlickerClient.get(request.query.text)
  console.log('res', res)

  return response.json(res)

  // return response.json({
  //   message: 'flicker'
  // })
})
