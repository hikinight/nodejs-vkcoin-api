const URL = require('url')

const pass = (arg1, arg2) => arg1 + arg2 - 1

module.exports = (inputURL, userId) => {
  // eslint-disable-next-line node/no-deprecated-api
  const info = URL.parse(inputURL)

  const link = info.protocol.replace('https:', 'wss:').replace('http:', 'ws:') + `//${info.host}/channel/`
  const urlws = `${link}${userId % 32}/${info.search}&ver=1&upd=1&pass=${pass(userId, 0)}`

  return urlws
}
