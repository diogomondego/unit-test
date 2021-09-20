const sum = (a, b) => {
  return a + b
}

const inOneHour = () => {
  const now = Date.now()
  const oneHourInMili = 1 * 60 * 60 * 1000
  return now + oneHourInMili
}

console.log(inOneHour())

module.exports = { sum, inOneHour }