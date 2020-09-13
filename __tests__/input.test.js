jest.mock('minimist');
const minimist = require ('minimist');
minimist.mockImplementation(()=>{
  return{
    a: 'test note ...',
    category: 'test'
  };
});

const Input = require('../lib/input.js');

describe('the Input module', ()=>{
  it('valid() will check if the it is validated or not',()=>{
    let test = new Input();
    console.log("test: ",test)
    expect(test.valid()).toBeTruthy();
  });

  it('valid() will reutrn invalid if I have no text',()=>{
    let test = new Input();
    delete test.category;
    expect(test.valid()).toBefalsy();
  });
});