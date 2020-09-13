'use strict';
const Note = require('../lib/notes.js');
require('@code-fellows/supergoose');

const note = new Note();

jest.spyOn(note, 'add');

describe('the Note module', () => {

  it('execute() check for valid method console it', async () => {
   
    note.execute({ 
      method: 'add',
      note: 'testing',
      categoryDesc: 'watch'}).then(result=> {
        expect(note.add).toHaveBeenCalled();
      }).catch(err=> {
        console.log("err>>> ",err)
      });
      
  });

});