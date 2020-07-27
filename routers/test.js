const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/constants');
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

router.post('/signup', async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name | !email | !password) {
    return res
      .status(400)
      .send({ message: 'Please provide name, email and passord' });
  }
  try {
    const newUser = User.create({
      name,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
    });
    res.status(201).json({ message: 'A new account is created' });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res
        .status(400)
        .send({ message: 'There is an existing account with this email' });
    }

    return res.status(400).send({ message: 'Something went wrong, sorry' });
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
