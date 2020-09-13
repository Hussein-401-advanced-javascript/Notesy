#!/usr/bin/env node
'use strict';

const minimist = require('minimist');
class Input {
  constructor() {
    // const secArgs = {}

    const args = minimist(process.argv.slice(2));
    args['method'] = process.argv.slice(2)[0];
    args['note'] = process.argv.slice(2)[1];
    // /////////
    console.log('process.argv ========>', process.argv);

    // args['category'] = process.argv.slice(2)[2];
    args['categoryDesc'] = process.argv.slice(2)[3];
    //////
    console.log(' args minimist >>>>> ', args, '<<<<<<<<<<<');

    this.method = this.checkMethod(args.method);
    this.note = this.checknote(args.note);
    //////////
    // this.category = this.checkCategory(args.category)
    this.categoryDesc = this.checkcategoryDesc(args.categoryDesc)

  }
  checkMethod(method) {
    let validMethods = /--add|-a|--list|-l|--delete|-d/i;

    return validMethods.test(method) ? method : 'PLEASE ADD A VALID METHOD';

  }
  checknote(note = '') {
    if (note) {
      return note
    } else {

      return (note) ? note : 'PLEASE ADD A NOTE1'
    }
  }
  // checkCategory(category) {
  //   let validCategorys = /--cat/i;
  //   return validCategorys.test(category) ? category : 'PLEASE ADD A VALID Category';
  // }
  checkcategoryDesc(theDesc) { 
    return (theDesc !== undefined && theDesc !== '' )? theDesc : 'PLEASE ADD A VALID Category descrption';
  }
        valid() {
      
          return this.method && this.note
        }
  
}

module.exports = Input;
