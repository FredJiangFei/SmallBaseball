const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const Joi = require('joi');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  role: String,
});

userSchema.statics.add = async function (res) {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(res.password, salt);

  let user = new this({
    firstName: res.firstName,
    lastName: res.lastName,
    email: res.email,
    password: hashPassword,
    role: res.role,
  });
  user = await user.save();
  return user;
};

userSchema.methods.comparePassword = async function (password) {
  const validPassword = await bcrypt.compare(password, this.password);
  return validPassword;
};

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      role: this.role,
    },
    config.get('jwtPrivateKey'),
    {
      expiresIn: 1200,
    }
  );
  return token;
};

mongoose.set('useCreateIndex', true);
const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    passwordConfirmation: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
