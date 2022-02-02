const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().max(45),
  password: Joi.string().max(45),
  role: Joi.string().max(45),
  avatar: Joi.string().allow(null, "").max(250),
});

const userValidation = (req, res, next) => {
  const payload = req.body;
  const { error, value } = userSchema.validate(payload, {
    abortEarly: false,
  });
  if (error) {
    next(error);
  } else {
    req.body = value;
    next();
  }
};

module.exports = { userValidation };
