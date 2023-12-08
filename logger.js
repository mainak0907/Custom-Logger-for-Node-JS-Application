require('dotenv').config()
const { createLogger, format, transports } = require("winston");
const { Logtail } = require('@logtail/node');
const { LogtailTransport } = require('@logtail/winston');
const logtail = new Logtail('pJwik5dcnAC4Ket9dK8ZAoi8');
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

        }),
        new LogtailTransport(logtail)
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