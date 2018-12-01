const functions = require('firebase-functions')

const FlickerClient = require('./clients/FlickerClients')
const HttpHandler = require('./clients/HttpHandler')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

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
  console.log(res)

  // if (res is 'success') {
  return response.json({
    message: 'flicker'
  })
  // } else {
  //   // HttpHandler.500
  // }
})
