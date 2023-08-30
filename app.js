const express = require('express');
const cors = require('cors');
const drinks = require('./src/drinks.json');
const food = require('./src/food.json');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.get('/drinks', (req, res) => {
  res.send(drinks);
});

app.get('/food', (req, res) => {
  res.send(food);
});

app.get('/food/:foodId', (req, res) => {
  const foodItem = food.find(({ id }) => id === req.params.foodId);
  console.log('foodItem: ', foodItem);
  res.send(foodItem);
});

app.listen(8000, () => {
  console.log(`Server started on port ${PORT}`);
});
