const Thought = require('../models/thought');
const Reaction = require('../models/reaction');

const reactionController = {
  addReaction({ params, body }, res) {
    try {
      const { reactionBody, username } = body; // Destructure the reactionBody and username from the request body
      const newReaction = { reactionBody, username }; // Create a new reaction object
  
      Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: newReaction } }, // Use the newReaction object
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
