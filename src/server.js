const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

global.beer = require('./models/beerModel')
const routes = require('./routes/beerRoutes')

mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://localhost/beerapp', { useNewUrlParser: true })

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)
app.listen(port)

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` })
})

console.log(`Server started on port ${port}`)
