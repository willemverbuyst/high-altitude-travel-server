const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/constants');
const { toJWT } = require('../auth/jwt');
const { Router } = require('express');
const User = require('../models').user;

const router = new Router();

/*** SIGNUP ***/
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .send({ message: 'Please provide name, email and passord' });
  }
  try {
    const newUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
    });

    delete newUser.dataValues['password']; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });
    const message = 'A new account is created';

    res.status(201).json({ token, ...newUser.dataValues, message });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res
        .status(400)
        .send({ message: 'There is an existing account with this email' });
    }

    return res.status(400).send({ message: 'Something went wrong, sorry' });
  }
});

module.exports = router;
