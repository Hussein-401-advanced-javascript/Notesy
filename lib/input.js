#!/usr/bin/env node
'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.method = this.checkMethod(args);
    this.categoryDesc = args.cat || args.category; 
  }
  
  checkMethod(args) {
    let methodsMapper = {
      'add': 'add',
      'a': 'add',
      'list': 'list',
      'delete': 'delete',
      'd': 'delete'
    };

    let method = null;
    Object.keys(args).forEach(key => {
      if (methodsMapper[key]) {
        method = methodsMapper[key];
        this.note = args[key];
      }
    });
    return method ? method : null;
  }
 
  valid() {
    switch (this.method){
      case 'add':
          return this.note && this.categoryDesc;
      case 'list':
          return true;
      case 'delete':
          return !!this.note;
      default: 
          return false;
    }
  }
}

module.exports = Input;