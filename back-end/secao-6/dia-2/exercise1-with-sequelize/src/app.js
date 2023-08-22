const express = require('express');

const employee = require('./controllers/employee.controller');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/employees/:id', employee.getById);

app.get('/employees', employee.getAll);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

module.exports = app;