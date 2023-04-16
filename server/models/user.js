const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  type:{type:String, required:true},
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmpassword: { type: String, required: true },
  team:{type:Array,required:false},
  about:{type:String, required:false},
});

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().required().label("First Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    confirmPassword: passwordComplexity().required().label("Confirm Password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };