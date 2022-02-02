const Joi = require("joi");

const ingredientSchema = Joi.object({
  name: Joi.string().max(45),
  type: Joi.string().max(45),
  unit: Joi.string().max(45),
});

const ingredientValidation = (req, res, next) => {
  const payload = req.body;
  const { error, value } = ingredientSchema.validate(payload, {
    abortEarly: false,
  });
  if (error) {
    next(error);
  } else {
    req.body = value;
    next();
  }
};

module.exports = { ingredientValidation };
