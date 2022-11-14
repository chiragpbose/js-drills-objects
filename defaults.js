
function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on 
    //the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults

    
    for(let key in defaultProps)
    {
        if(!(obj.hasOwnProperty(key)))
        {
            obj[key]=defaultProps[key];
        }
    }
return obj;
}

module.exports=defaults;
