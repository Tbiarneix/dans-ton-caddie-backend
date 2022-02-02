const Joi = require("joi");

const listSchema = Joi.object({
  ingredient_id: Joi.number().integer(),
  user_id: Joi.number().integer().allow(null, ""),
});

const listValidation = (req, res, next) => {
  const payload = req.body;
  const { error, value } = listSchema.validate(payload, {
    abortEarly: false,
  });
  if (error) {
    next(error);
  } else {
    req.body = value;
    next();
  }
};

module.exports = { listValidation };
