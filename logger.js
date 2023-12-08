require('dotenv').config()
const { createLogger, format, transports } = require("winston");
require('winston-mongodb')
const logger = createLogger({
    transports: [
        new transports.File({
            level: 'info',
            filename: 'logsOK.log'
        }),
        new transports.File({
            level: 'warn',
            filename: 'logsWarnings.log'
        }),
        new transports.File({
            level: 'error',
            filename: 'logsErrors.log'
        }),
        new transports.MongoDB({
            db: process.env.MONGO_URI,
            collection: 'logs'

        })
    ],
    format:  format.combine(
        format.timestamp(),
        format.json(),
        format.metadata(),
        format.prettyPrint()
    ),
    statusLevels: true,
})


module.exports = logger