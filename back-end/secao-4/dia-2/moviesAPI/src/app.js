const express = require('express');

const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, './movies.json');

const app = express();

app.use(express.json())

async function readFile() {
  try {
    const data = await fs.readFile(moviesPath, 'utf-8')
    return JSON.parse(data);
  } catch (e) {
    console.error(`Não é possível ler o arquivo: ${e.message}`);
  }
}

app.get('/movies/search', async (req, res) => {
  const { q } = req.query;
  try {
    const movies = await readFile();
    if (q) {
      const filteredMovies = movies.filter((element) => element.movie.includes(q));
      res.status(200).json(filteredMovies);
    }
    res.status(200).end();
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json({ movies });
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const movies = await readFile();
    const movie = movies.find((element) => element.id === Number(id));
    res.status(200).json({ movie });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    const newMovie = { id:movies[movies.length - 1].id + 1, ...req.body }
    const allMovies = JSON.stringify([...movies, newMovie])
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json({ movie: newMovie })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  try {
    const movies = await readFile();
    const index = movies.findIndex((element) => element.id === +id)
    if (!index) {
      res.status(404).json({ message: 'Movie not found' });
    }
    movies[index] = { id: Number(id), movie, price };
    const updatedMovies = JSON.stringify(movies, null, 2)
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(200).json({ movie: movies[index] })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const movies = await readFile();
    const newMovies = movies.filter((element) => element.id !== Number(id));
    const updatedMovies = JSON.stringify(newMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
});

module.exports = app;