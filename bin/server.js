'use strict'

const http = require('http')
const app = require('../src/app')
const port = searchPort(process.env.PORT || '3000')
const server = http.createServer(app)

server.listen(port)

function searchPort (val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) return val
  if (port >= 0) return port
  return false
}