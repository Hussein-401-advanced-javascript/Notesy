'use strict';
const newNote = require('./models/notes-schema.js')

class Note {
  
  async execute(option) {
    let note = option.note
    let method = option.method;
   
    switch (option.method) {
      case 'add':
        return await this.add(option);
      
        case 'list':
          let allMyListByCategory = await this.listByCategory(note);
          allMyListByCategory.forEach(item=> {
              console.log( `category: ${item.categoryDesc} note:  ${item.note}`);
          });
          return allMyListByCategory;
      
      case 'delete':
        return await this.deleteNote(option.note);
      
      default:
        console.log('NO valid execution');
    }
  }

  async add(option) {
    let record = new newNote(option);
    let save = await record.save();
    return save;
  }

  async deleteNote(id) {
    let deletedNote = await newNote.findByIdAndRemove(id);
    if (deletedNote) {
      return deletedNote;
    } else {
      console.log('the note has deleted');
    }
  }

  async list() {
    return await newNote.find({});
  }

  async listByCategory(category) {
    let obj = (typeof category == "string") ? { categoryDesc: category } : {};
    return await newNote.find(obj);
  }

}

module.exports = Note;