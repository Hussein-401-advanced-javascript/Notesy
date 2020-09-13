'use strict';
const Note = require('../lib/notes.js');
const noteee = require('../lib/models/notes-collection')
require('@code-fellows/supergoose');

jest.spyOn(global.console, 'log');

describe('the Note module', () => {

  it('execute() check for valid method console it', () => {

    const note = new Note();
    note.execute({ add: 'note' });
    expect(console.log).toHaveBeenCalled();
  });
  // it('random() check for valid method console it', () =>{

  //   const note = new Note();
  //   note.random({});
  //   expect(console.log).toHaveBeenCalled();
  // });
  it('create new Note',()=>{
    let object = {method:'add',note:'foo',categoryDesc:'foo'}; 
    return noteee.create(object).then(record =>{
        myRecord = record;
        Object.keys(object).forEach(key =>{
            expect(record[key]).toEqual(object[key]);
        })
    })
})


});
