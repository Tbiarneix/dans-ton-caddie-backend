const { ValidationError } = require('joi');

const errorHandler = (err, req, res, next) => {
  console.log(err)
  if (err.constructor.name === 'NotFoundError') {
    res.status(404).json({
      sucess: false,
      message: 'No resource found'
    });
  } else if (err.code === "P2025") {
    res.status(404).json({
      sucess: false,
      message: 'No resource found'
    });
  } else if (err instanceof ValidationError) {
    const validationErrors = err.details.map((e) => e.message);
    res.status(400).json({
      sucess: false,
      errors: validationErrors,
    });
  } else {
    res.status(500).send('Something goes wrong');
  }
};

module.exports = errorHandler;
