const mongoose = require('mongoose');

const boxSchema = new mongoose.Schema({
  boxName: {
    type: String,
    required: true,
    default: "Unnamed Box",
  },
  crayons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Crayon', 
    },
  ],
});

const Box = mongoose.model('Box', boxSchema);

module.exports = Box;
