const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  title:{type:String, required:true},
  purpose: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  time:{type:String, required:true},
  date:{type:String, required:true},
  phone: { type: String, required: true },
  about:{type:String, required:true},
});

const Campaign = mongoose.model("campaign", campaignSchema);

module.exports = Campaign;