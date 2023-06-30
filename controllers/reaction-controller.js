const Thought = require('../models/thought');
const Reaction = require('../models/reaction');

const reactionController = {
  // Add a reaction to a thought
  addReaction({ params, body }, res) {
    try {
      const parsedBody = JSON.parse(body);
      Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: parsedBody } },
        { new: true, runValidators: true }
      )
        .then((thoughtData) => {
          if (!thoughtData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
          }
          res.json(thoughtData);
        })
        .catch((err) => res.status(400).json(err));
    } catch (error) {
      res.status(400).json({ message: 'Invalid JSON payload' });
    }
  },

  // Remove a reaction from a thought
  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = reactionController;
