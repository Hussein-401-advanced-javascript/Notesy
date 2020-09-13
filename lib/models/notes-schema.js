'use strict';

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  note: { type: String, required: true },
  categoryDesc: {type: String, require: true}
});

module.exports =mongoose.model('notes', notes);


