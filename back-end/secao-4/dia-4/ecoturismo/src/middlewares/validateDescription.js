const validateFields = (field, res, value) => {
  if (!field) {
    return res.status(400).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;

  return validateFields(description, res, 'description')
  || validateFields(description.createdAt, res, 'createdAt')
  || validateFields(description.rating, res, 'rating')
  || validateFields(description.difficulty, res, 'difficulty')
  || next();
};

module.exports = validateDescription;