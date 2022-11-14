const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions
const exportedfn=require('../mapObject.js');

function cb(property)
{
    property=property+ "test_transform";
    return property;
}
exportedfn(testObject, cb);