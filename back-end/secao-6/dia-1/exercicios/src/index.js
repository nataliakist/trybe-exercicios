const express = require('express');
const booksController = require('./controllers/booksController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', booksController.getAll);

app.get('/books/:id', booksController.getById);

app.put('/books/:id', booksController.update);

app.post('/books', booksController.create);

app.delete('/books/:id', booksController.remove);

app.use((error, _req, res, _next) => {
  return res.status(500).json({ error: error.message });
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));