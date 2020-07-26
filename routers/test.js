const { Router } = require('express');
const User = require('../models').user;
const Journey = require('../models').journey;
const TravelDay = require('../models').travelDay;

const router = new Router();

router.get('/users', async (req, res, next) => {
  try {
    const users = await User.findAll({ attributes: ['id', 'name'] });
    res.send(users);
  } catch (error) {
    next(error);
  }
});

router.get('/journeys', async (req, res, next) => {
  try {
    const journeys = await Journey.findAll({
      attributes: ['id', 'name'],
      include: [{ model: TravelDay, attributes: ['id', 'from', 'to'] }],
    });
    res.send(journeys);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
