const mongoose = require("mongoose");

const crayonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "Unnamed Crayon",
  },
  hexCode: {
    type: String,
    required: true,
  },
});

const Crayon = mongoose.model("Crayon", crayonSchema);

module.exports = Crayon;
