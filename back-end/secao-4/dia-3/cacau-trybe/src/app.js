const express = require('express');

const cacauTrybe = require('./cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacauTrybe.getAllChocolates();
  const filteredChocolates = chocolates.filter((chocolate) => chocolate.name.includes(name));
  if (filteredChocolates.length === 0) {
    return res.status(404).json([]);
  }
  return res.status(200).json(filteredChocolates);
});

app.get('/chocolates', async (req, res) => {
  try {
    const chocolates = await cacauTrybe.getAllChocolates();
    return res.status(200).json({
      chocolates
    })
  } catch (error) {
    return res.status(500).json({
      message: 'INTERNAL SERVER ERROR'
    })
  }
});

app.get('/chocolates/total', async (req, res) => {
  try {
    const chocolates = await cacauTrybe.getAllChocolates();
    return res.status(200).json({
      totalChocolates: chocolates.length,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'INTERNAL SERVER ERROR'
    });
  }
});

app.post('/chocolates', async (req, res) => {
  const { name, brandId } = req.body;
  const newChocolate = await cacauTrybe.createChocolate(name, brandId);
  return res.status(201).json({
    newChocolate
  })
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;

  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const updatedChocolate = await cacauTrybe.updateChocolate(Number(id), name, brandId);
  if (!updatedChocolate) return res.status(404).json({ message: 'Chocolate not found' });
  return res.status(200).json({
    chocolate: updatedChocolate,
  });
});

module.exports = app;
