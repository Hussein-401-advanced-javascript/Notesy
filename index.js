#!/usr/bin/env node
'use strict';
const mongoose = require ('mongoose');
const MONGOOSE_URL = 'mongodb://localhost:27017/notes';
mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
const note = new Note();
const options = new Input();

note.execute(options);
// note.deleteNote('5f5b5ffd7f8e9238902f1038');
// console.log('*/*/**/*/****/**/****/');
// note.list({});
// console.log('*/*/**/*/****/**/****/');
