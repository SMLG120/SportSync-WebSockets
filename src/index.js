const express = require('express');
const app = express();
const port = 8000;

// Use JSON middleware
app.use(express.json());

// Root GET route
app.get('/', (req, res) => {
  res.send('Welcome to SportSync!');
});

// Start server and log URL
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

