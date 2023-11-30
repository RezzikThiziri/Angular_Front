
const Joi = require('joi');
const BaseModel = require('../utils/base-model');

module.exports = new BaseModel('Student', {
  //studentId: Joi.string().required(),
  FirstName: Joi.string().required(),
  LastName: Joi.string().required(),
});
