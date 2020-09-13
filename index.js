#!/usr/bin/env node
'use strict';
const mongoose = require ('mongoose');
// add it in .env
const MONGOOSE_URL = 'mongodb://localhost:27017/notes'; 

mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
const note = new Note(); // no constructor nth extra happens
const options = new Input(); //we have a constructor it will do some stuff like: mapper

if (options.valid()) {
  note.execute(options).then(result=> {
    console.log({result});
  }).then(()=>{
    mongoose.disconnect();
  });
} else {
  help(); 
}

function help() {
  console.log(`to use this CLI application you need to use:
      ./index.js -method "note" -cat "category description"
      
      add  
        note is required 
        category is required
      list 
        optional category can be requested
      delete
        note id is required 
  `);
}