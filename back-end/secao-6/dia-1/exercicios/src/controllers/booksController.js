const book = require('../models/book');
const bookService = require('../services/bookService');

const getAll = async (req, res) => {
  const books = await bookService.getAll();
  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json(book);
};

const create = async (req, res) => {
  const data = req.body;
  
  const newBook = await bookService.create(data);

  return res.status(201).json(newBook);
};

const update = async (req, res) => {
  const { id } = req.params;
  const dataToUpdate = req.body;

  const updatedBook = await bookService.update(id, dataToUpdate);

  if (!updatedBook) return res.status(404).json({ message: 'Book not found' });


  return res.status(201).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const removedBook = await bookService.remove(id);

  if (!removedBook) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json({ message: 'Book removed' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};