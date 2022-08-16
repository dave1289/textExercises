const filterOutOdds = (...arguments) => arguments.filter(x => x % 2 === 0);

const findMin = (...arguments) => Math.min(...arguments);

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2}
};

const doubleAndReturnArgs = (arr, ...arguments) => [...arr, ...arguments.map(n => n * 2)];

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let rand = Math.floor(Math.random() * items.length);
    return [...items.slice(0, rand), ...items.slice(rand + 1)]
};

/** Return a new array with every item in array1 and array2. */

const newArray = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {
//     let newObj = {...obj};
//     newObj[key] = val;
//     return newObj
// };

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combObj = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj
}