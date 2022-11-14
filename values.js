function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values

    let outputArray=[];
    for(let key in obj)
    {
        outputArray.push(obj[key]);
    }
    return outputArray;
}
module.exports=values;