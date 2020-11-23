const mongoose = require('mongoose')
const beer = mongoose.model('beer')

exports.list_all_beers = (req, res) => {
  beer.find({}, (err, beers) => {
    if (err) res.send(err)
    res.json(beers)
  })
}

exports.create_a_beer = (req, res) => {
  const newBeer = new beer(req.body)
  newBeer.save((err, beer) => {
    if (err) res.send(err)
    res.json(beer)
  })
}

exports.read_a_beer = (req, res) => {
  beer.findById(req.params.beerId, (err, beer) => {
    if (err) res.send(err)
    res.json(beer)
  })
}

exports.update_a_beer = (req, res) => {
  beer.findOneAndUpdate(
    { _id: req.params.beerId },
    req.body,
    { new: true },
    (err, beer) => {
      if (err) res.send(err)
      res.json(beer)
    }
  )
}

exports.delete_a_beer = (req, res) => {
  beer.deleteOne({ _id: req.params.beerId }, (err) => {
    if (err) res.send(err)
    res.json({
      message: 'beer successfully deleted',
      _id: req.params.beerId,
    })
  })
}
