const mongoose = require("mongoose");

const crayonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hexCode: {
    type: String,
    required: true,
  },
});

const Crayon = mongoose.model("Crayon", crayonSchema);

module.exports = Crayon;
