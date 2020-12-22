const mongoose = require('mongoose')

const { Schema } = mongoose

const beerSchema = new Schema(
  {
    beer: {
      type: String,
      required: 'beer cannot be blank',
    },
    details: {
      type: String,
      required: 'details  cannot be blank',
    },
  },
  { collection: 'beer' }
)

module.exports = mongoose.model('beer', beerSchema)
