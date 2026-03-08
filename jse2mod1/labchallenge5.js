function deepComp(obj1, obj2) {
    // If both are strictly equal, return true
    if (obj1 === obj2) return true;

    // If either is null or not an object, return false
    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }

    // Get all keys of both objects
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // If number of keys is different, objects are not equal
    if (keys1.length !== keys2.length) return false;

    // Compare each key
    for (let key of keys1) {
        // Skip if property is a function
        if (typeof obj1[key] === 'function' || typeof obj2[key] === 'function') continue;

        // If key does not exist in obj2, return false
        if (!obj2.hasOwnProperty(key)) return false;

        // Recursive comparison for nested objects/arrays
        if (!deepComp(obj1[key], obj2[key])) return false;
    }

    return true;
}

// Test cases
let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};

console.log(deepComp(a,b)); 
console.log(deepComp(a,c)); 
console.log(deepComp(a,d)); 
console.log(deepComp(a,e)); 
console.log(deepComp(a,f)); 