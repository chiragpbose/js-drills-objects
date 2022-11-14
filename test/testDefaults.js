const testObject = { 
    name: 'Bruce Wayne', 
    age: 36, 
    location: 'Gotham' }; // use this object to test your functions

let defaultProps={          //sample default object
    name: 'Bruce Wayne', 
    age: 36, 
    location: 'Gotham', 
    comic : 'DC', 
    villain: 'Joker'};

const exportedfn=require('../defaults.js');
    console.log(exportedfn(testObject,defaultProps));