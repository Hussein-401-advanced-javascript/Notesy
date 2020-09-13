'use strict';
const schema = require('./history.js');
class History {
  constructor(){}

  get(categoryDesc) {
    if (categoryDesc) {
      return schema.find(categoryDesc);
    } else {
      return schema.find();
    }
  }
  create(record) {
    let newRecord = new schema(record);
    return newRecord.save;
  }
  
  delete(_id) {
    if (_id) {
      return schema.findByIdAndDelete(_id);
    } else {
      return `there is no ID its value${_id}`;
    }
  }

}

// export using singleton
module.exports = new History();
