const { Router } = require('express');
const authMiddleware = require('../auth/authMiddleware');
const Journey = require('../models').journey;
const TravelDay = require('../models').travelDay;

const router = new Router();

router.get('/:userId/journeys', authMiddleware, async (req, res, next) => {
  const { userId } = req.params;
  try {
    const journeys = await Journey.findAll({
      where: { userId },
      attributes: ['id', 'name'],
      include: [{ model: TravelDay, attributes: ['id', 'from', 'to'] }],
    });
    res.send(journeys);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:userId/journeys/:journeyId',
  authMiddleware,
  async (req, res, next) => {
    const { userId, journeyId } = req.params;
    try {
      const journeys = await Journey.findAll({
        where: { userId, id: journeyId },
        attributes: ['id', 'name'],
        include: [{ model: TravelDay, attributes: ['id', 'from', 'to'] }],
      });
      res.send(journeys);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
