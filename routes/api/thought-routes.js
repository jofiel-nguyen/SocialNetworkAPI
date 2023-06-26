const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// GET all thoughts
router.route('/').get(getAllThoughts);

// GET a single thought by ID
router.route('/:thoughtId').get(getThoughtById);

// POST create a new thought
router.route('/').post(createThought);

// PUT update a thought by ID
router.route('/:thoughtId').put(updateThought);

// DELETE a thought by ID
router.route('/:thoughtId').delete(deleteThought);

// POST add a reaction to a thought
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE remove a reaction from a thought
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
