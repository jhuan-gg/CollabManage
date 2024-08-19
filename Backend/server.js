const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const conn = require('./db/conn')

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
  const body = req.body
  res.status(201)
  res.send(body);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

conn
    // .sync({
    //     force: true
    // })
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Rodando na porta ${port}`)
        })
    })
    .catch((err) => {
        console.log(err)
      })