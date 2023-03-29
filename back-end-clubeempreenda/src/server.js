const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const users = require('./users');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const usersRoute = require('./routes/router-users');
app.use('/api/usuarios', usersRoute);

app.use(express.json());

app.get('/', async (req, res) => {
          const query = await users();
          return res.status(201).json(query);
});

app.listen(5000, () => {
          console.log('Servidor rodando na porta', `${port}`)
});