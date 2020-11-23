const mongoose = require('mongoose')

const { Schema } = mongoose

const beerSchema = new Schema(
  {
    beer1: {
      type: String,
      required: 'beer1 cannot be blank',
    },
    beer2: {
      type: String,
      required: 'beer2  cannot be blank',
    },
  },
  { collection: 'beer' }
)

module.exports = mongoose.model('beer', beerSchema)
