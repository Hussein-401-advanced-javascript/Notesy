'use strict';
const Schema = require('./models/note-schema.js');

class Notes {
  get(_id) {
    if (_id) {
      return Schema.findOne({ _id });
    } else {
      return Schema.find();
    }
  }
  create(record) {
    return new Schema(record);
  }
  update(_id, record) {
    if (_id) {
      return Schema.findByIdAndUpdate(_id, record);
    } else {
      return `there is no ID its value${_id}`;
    }
  }
  delete(_id) {
    if (_id) {
      return Schema.findByIdAndDelete(_id);
    } else {
      return `there is no ID its value${_id}`;
    }
  }

}

// export using singleton
module.exports = new Notes();