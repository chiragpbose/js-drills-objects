//const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

function keys(obj) {

    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
    let outputArray=[];
    for(let key in obj)
    {
        outputArray.push(key);
    }
    return outputArray;
}
//console.log(keys(testObject));
module.exports=keys;
