const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Mock database (replace with a real database in a production app)
const pets = [];

// Routes
app.get('/api/pets', (req, res) => {
  res.json(pets);
});

app.post('/api/pets', (req, res) => {
  const { name, age, species } = req.body;
  if (!name || !age || !species) {
    return res.status(400).json({ error: 'Name, age, and species are required.' });
  }
  const pet = { name, age, species };
  pets.push(pet);
  res.status(201).json(pet);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
