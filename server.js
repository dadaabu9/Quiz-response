const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route to handle saving user data
app.post('/save-data', (req, res) => {
  const { username, score } = req.body;
  
  if (!username || !score) {
    return res.status(400).json({ error: 'Username and score are required' });
  }

  // Process and store the data (this is just a log for now)
  console.log(`Received data: Username: ${username}, Score: ${score}`);
  
  // Here you can integrate with a database or other storage system.
  
  res.status(200).json({ message: 'Data saved successfully' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
