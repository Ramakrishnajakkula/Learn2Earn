const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

const app = express();

// Middleware
app.use(bodyParser.json());

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Update with your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

// Correct MongoDB URI
const mongoURI = 'mongodb+srv://ramakrishna:Anji%40178909@cluster0.ifqbcou.mongodb.net/temp?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
 
