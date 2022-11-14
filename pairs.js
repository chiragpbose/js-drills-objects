
function pairs(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
let arrayofValues=[];
for(let keys in obj)
{
    arrayofValues.push(obj[keys]);
}
return arrayofValues;
}

module.exports=pairs;