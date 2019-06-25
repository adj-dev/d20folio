const router = require('express').Router();
const db = require('../models');
const seeds = require('../charseeds.json');


router.route('/characters')
  .get((req, res, err) => {
    // get all characters here
    res.json(seeds)
  })

router.route('/character')
  .post((req, res, err) => {
    // make a new character here
    res.json('cool, you did it.')
  })

router.route('/characters/:id')
  .get((req, res, err) => {
    // get a single here
    res.json(seeds[0])
  })
  .put((req, res, err) => {
    // update a single character
    res.json('');
  })
  .delete((req, res, err) => {
    // delete a single character
    res.json('');
  })

router.route('characters/mine')
  .get((req, res, err) => {
    // get all my characters here
    res.json(seeds);
  })

module.exports = router;