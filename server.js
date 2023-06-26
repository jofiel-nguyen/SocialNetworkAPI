const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Routes
app.use('/api/users', require('./routes/api/user-routes'));
app.use('/api/thoughts', require('./routes/api/thought-routes'));
app.use('/api/reactions', require('./routes/api/reaction-routes'));

// Default route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});
