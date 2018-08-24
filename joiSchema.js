var Joi = require('joi');

var schema = Joi.object().keys({
  name: Joi.string()
    .regex(/^[a-zA-Z. ]*$/)
    .trim()
    .required()
    .error(new Error('Valid name is required')),
  phone: Joi.string()
    .regex(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
    .trim()
    .required()
    .error(new Error('Valid phone number is required')),
  email: Joi.string()
    .trim()
    .email()
    .required()
    .error(new Error('Valid email is required'))
});

module.exports = schema;
