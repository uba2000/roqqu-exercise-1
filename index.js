const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;


});

// Registration
app.post('/registration', (req, res) => {
  const {first_name, last_name,}
});

mongoose
  .connect(
    'mongodb+srv://ebuka:marvel007@cluster0.aq5po.mongodb.net/'
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => console.log('Error...', error));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
