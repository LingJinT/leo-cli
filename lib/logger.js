const logger = require('graceful-logger')

logger.minfo = function () {
  const args = Array.prototype.slice.call(arguments)
  // logger.info.apply(logger, [moment().format('YYYY-MM-DDTHH:mm:ss.sssZ')].concat(args))
  logger.info.apply(logger,[`${args}`])
}

logger.merror = function () {
  const args = Array.prototype.slice.call(arguments)
  logger.error.apply(logger, [`${args}`])
}

module.exports = logger
