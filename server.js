const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5500', 'https://yourinneratlas.co', 'https://*.onrender.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public'

// MongoDB connection
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}
console.log('Attempting MongoDB connection with URI:', mongoUri.replace(/:([^:@]*)@/, ':****@'));
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // 30 seconds
  connectTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000 // 45 seconds
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
console.log('MongoDB initialized successfully');

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

app.post('/api/unlock-deck', async (req, res) => {
  console.log('Received /api/unlock-deck request:', req.body);
  console.log('CORS request from origin:', req.get('origin'));
  try {
    let email, name;
    if (req.body.id_token) {
      console.log('Processing Google Sign-In with id_token:', req.body.id_token.substring(0, 10) + '...');
      const { OAuth2Client } = require('google-auth-library');
      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
      let ticket;
      try {
        ticket = await client.verifyIdToken({
          idToken: req.body.id_token,
          audience: process.env.GOOGLE_CLIENT_ID
        });
      } catch (error) {
        throw new Error(`Token verification failed: ${error.message}`);
      }
      const payload = ticket.getPayload();
      console.log('Google Sign-In payload:', payload);
      email = payload.email;
      name = payload.name;
      if (!email) throw new Error('No email in Google Sign-In payload');
      console.log('Google Sign-In successful for:', email);
    } else if (req.body.email) {
      console.log('Processing email submission:', req.body.email);
      email = req.body.email;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Invalid email format');
      }
    } else {
      throw new Error('No email or id_token provided');
    }

    const user = await User.findOneAndUpdate(
      { email },
      { email, name, createdAt: new Date() },
      { upsert: true, new: true }
    );
    console.log('User saved to MongoDB:', user);
    res.json({ success: true });
  } catch (error) {
    console.error('Error processing /api/unlock-deck:', error.message, error.stack);
    res.status(400).json({ success: false, message: error.message, details: error.stack });
  }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('Environment variables:', {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    MONGODB_URI: process.env.MONGODB_URI ? process.env.MONGODB_URI.replace(/:([^:@]*)@/, ':****@') : 'Not set',
    PORT: process.env.PORT
  });
});