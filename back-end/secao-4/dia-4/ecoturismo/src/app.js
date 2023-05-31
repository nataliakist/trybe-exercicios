require('express-async-errors');
const express = require('express');
const crypto = require('crypto');

const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateToken = require('./middlewares/validateToken');

const app = express();

app.use(express.json());

app.post('/signup', (req, res) => {
  const requiredProperties = ['email', 'password', 'firstName', 'phone'];
  const checkProperties = requiredProperties.every((property) => property in req.body);
  if (!checkProperties) {
    return res.status(401).json({
      message: 'Campo(s) ausente(s)',
    });
  }
  const token = crypto.randomBytes(8).toString('hex'); 
  return res.status(200).json({ token });
});

app.post('/activities',
validateToken,
validateName,
validatePrice,
validateDescription,
validateCreatedAt,
validateRating,
validateDifficulty,
(req, res) => {
  const { name, price, description } = req.body;
  const { createdAt, rating, difficulty } = description;
  const newActivity = {
    name,
    price,
    description: {
      rating,
      difficulty,
      createdAt,
    },
  };
  res.status(201).json({
    message: 'Atividade cadastrada com sucesso!',
    newActivity,
  });
});

module.exports = app;