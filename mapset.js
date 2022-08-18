{1,2,3,4}

"ref"

Map(2) {Array(3) => true, Array(3) => false}

function dupeCheck(arr) {
    let check = new Set (arr);
    if (check.size === arr.length) {
        //returns true if no duplicates are found.
        return true;
    }
    return false;
}

function vowelCount(str) {
    let vowels = 'aeiou';
    const vowelMap = new Map();
    for (letter of str) {
        let lowerCase = letter.toLowerCase();
        if (vowels.indexOf(lowerCase) !== -1){
            if (vowelMap.has(lowerCase)){
                vowelMap.set(lowerCase, vowelMap.get(lowerCase) +1);
            }
            else {
                vowelMap.set(lowerCase, 1);
            }
        }
    }
    return vowelMap;
}