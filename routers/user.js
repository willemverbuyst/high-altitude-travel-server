const { Router } = require('express');
const authMiddleware = require('../auth/authMiddleware');
const Journey = require('../models').journey;
const TravelDay = require('../models').travelDay;

const router = new Router();

router.get('/:id/journeys', authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  try {
    const journeys = await Journey.findAll({
      where: { userId: id },
      attributes: ['id', 'name'],
      include: [{ model: TravelDay, attributes: ['id', 'from', 'to'] }],
    });
    res.send(journeys);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
