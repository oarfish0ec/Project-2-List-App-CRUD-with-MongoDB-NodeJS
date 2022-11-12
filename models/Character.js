const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const characterSchema = new Schema({
  name: String,
  race: String,
  jobClass: String,
  strength: Number,
intelligence: Number,
  agility: Number,
  luck: Number,
  description: String
});
 
module.exports = mongoose.model("Character", characterSchema);