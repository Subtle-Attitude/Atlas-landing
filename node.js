const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: ['http://127.0.0.1:5500', 'https://yourinneratlas.co'],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  maxAge: 86400
}));

app.post('/api/unlock-deck', (req, res) => {
  const { email, id_token } = req.body;
  // Validate email or id_token
  res.json({ success: true });
});

app.listen(3000);