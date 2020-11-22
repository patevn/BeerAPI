const beerBuilder = require('../controllers/beerController');

module.exports = app => {
  app
    .route('/beers')
    .get(beerBuilder.list_all_beers)
    .post(beerBuilder.create_a_beer);

  app
    .route('/beers/:beerId')
    .get(beerBuilder.read_a_beer)
    .put(beerBuilder.update_a_beer)
    .delete(beerBuilder.delete_a_beer);
}; 