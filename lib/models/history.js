'use strict';
const mongoose = require('mongoose');
const notes = mongoose.Schema({
  // method: {
  //     type: String,
  //     required: true,
  //     enum:['--add', '-a']
  // },
  note: { type: String, required: true },
  categoryDesc: {type: String, require: true}
});
module.exports =mongoose.model('notes', notes);



