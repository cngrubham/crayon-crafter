const mongoose = require('mongoose');

const boxSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
