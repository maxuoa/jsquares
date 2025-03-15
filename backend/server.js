const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'JSQuares API is running', version: '1.0.0' });
});

// Sample route for Japanese words
app.get('/api/words', (req, res) => {
  const sampleWords = [
    { english: 'Hello', japanese: 'こんにちは', level: 'N5' },
    { english: 'Thank you', japanese: 'ありがとう', level: 'N5' },
    { english: 'Goodbye', japanese: 'さようなら', level: 'N5' }
  ];
  res.json(sampleWords);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
