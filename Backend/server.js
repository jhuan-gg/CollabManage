const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const sequelize = new Sequelize('collabmanage', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

sequelize.authenticate()
  .then(() => console.log('Database connected.'))
  .catch(err => console.error('Unable to connect to the database:', err));
