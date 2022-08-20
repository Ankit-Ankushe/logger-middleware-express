const express = require('express');
const morgan = require('morgan');

const app = express()
// morgan('tiny')
morgan(':method :url :status :res[content-length] - :response-time ms')

morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '',
      tokens['response-time'](req, res), 'ms'
    ]
  })

  app.get("/text",morgan(),(req,res) => {
    res.send('morgan came in terminal')
    // console.log(morgan())
  })
  
  app.get("/number" ,morgan(),(req,res) => {
    res.send('morgan came in terminal')
  })
app.listen(8080,()=>{
    console.log('server started');
})