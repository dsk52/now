class DateTimeUtility {
  static todayDate() {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = ('0' + today.getDate()).slice(-2)

    return `${year}.${month}.${day}`
  }

  static dayOfTheWeek() {
    const today = new Date()
    const weeks = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']
    return weeks[today.getDay()]
  }

  static time() {
    const day = new Date()
    const hour = day.getHours()
    const minute = ('0' + day.getMinutes()).slice(-2)
    return `${hour}:${minute}`
  }
}

export { DateTimeUtility }
