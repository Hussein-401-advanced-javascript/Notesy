'use strict';
const newNotes = require('./models/notes-collection.js')


class Note {
  async execute(option) {
    let note = option.note
    let method = option.method

    // if()
    console.log('================14', option, '===========');

    switch (option.method) {
      case '--add':
      case '-a':
        console.log('--------> inside the excute function ')
        let addNote = await this.add(option);
        console.log('addNote------------> : ', addNote);
        if (addNote) {
          console.log('--------> inside the addNote  function ')

          console.log(`the note added ${note}`);
        } else {
          console.log('PLEASE ADD A NOTE2');
        }
        break;
      case '--list':
      case '-l':
        if (note = 'undefined' || !note) {
          if (!method) {
            console.error('worng method');
            break;
          } else { // list all
            console.log('--------> inside the allMyList function ')
            let allMyList = await this.list();
            console.log('allMyList : ', allMyList);
          }
        } else {

          if (!method) {
            console.error('worng method');
            break;
          } else {
            console.log('--------> inside the allMyListByCategory function ')
            let allMyListByCategory = await this.listByCategory(note);
            console.log('allMyListByCategory : ', allMyListByCategory);
          }
        }
        break;
      case '--delete':
      case '-d':
        if (note) {
          if (method) {
            let deletedNote = await this.deleteNote(note);
            if (deletedNote) {
              console.log(`${note} deleted`);
            } else {
              console.log('Please enter a valid one');
            }
          }
        }
      default:
        console.log('PLEASE ADD A NOTE3');

    }

    // console.log('option------>', option, 'option------>');
    // let returned = await this.save(option)
    // console.log('returned---------> ', returned);

  }

  async add(option) {
    // console.log(option)
    // console.log('SAVING');
    // let record = new newNote(option);
    let save = await newNotes.create(option);
    console.log('added =======>', save);
    return save;
  }
  async deleteNote(id) {
    // console.log('>>>>>>********');
    let deletedNote = await newNotes.delete({ _id: id });
    if (deletedNote) {

      return deletedNote;
    } else {
      console.log('the note has deleted');
    }

  }
  async list() {
    // console.log('********');
    let listedNotes = await newNotes.get({});

    // console.log('listedNotes =====>', listedNotes);
    return listedNotes;

  }
  async listByCategory(category) {
    console.log('********');
    let listedNotesByCategory = await newNotes.get({ categoryDesc: category });

    console.log('listedNotesByCategory =====>', listedNotesByCategory);
    return listedNotesByCategory;

  }

  // async save(opt) {
  //   let record = new newNote(opt)
  //   let saved = await record.save();
  //   // console.log('saved -------> ', saved);
  //   return saved;

  // }
  // random() {
  //   return Math.floor((Math.random() * 1000));

  // }

}
// deleteNote('5f5bb3cd3e04603954889099')

module.exports = Note;
