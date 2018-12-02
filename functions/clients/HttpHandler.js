module.exports = class Http {
  static BadRequest(res) {
    return res.status('401').json({ message: 'Bad Request' })
  }
}
