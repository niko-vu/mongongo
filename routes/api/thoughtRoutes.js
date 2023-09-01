const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,

  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtID
router
  .route('/:thoughtID')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:thoughtID/reactions')
  .post(createReaction)
  .delete(deleteReaction);
  
module.exports = router;

