// Berilgan massiv ichidagi birinchi unik elementni toping.
function firstUnique(arr = []) {
   let newArr  = arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item) );
   return newArr[0];
}

// Test case
// console.log(firstUnique([2, 3, 4, 2, 3, 5, 6, 5])); 
// Output: 4

// Berilgan satr ichidagi barcha raqamlarni ajratib, tartiblang.
function extractAndSortNumbers(str) {
    let newArr = str.split('').map(item => +item);
    let result = newArr.filter(item =>!isNaN(item));
    result.sort((a, b) => a - b);
    return result;
}

// Test case
// console.log(extractAndSortNumbers("a3c2d4b1")); 
// Output: [1, 2, 3, 4]


// Berilgan ob'ekt ichidagi barcha qiymatlar son bo'lsa, ularni ikki barobar oshiring.
function doubleNumericValues(obj) {
   let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key] * 2;
        } else if (typeof obj[key] === 'object') {
            newObj[key] = doubleNumericValues(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

// Test case
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    }
};
// console.log(doubleNumericValues(obj)); 
// Output: { a: 2, b: { c: 4, d: { e: 6, f: 8 } } }



// Berilgan ob'ekt ichidagi barcha kalitlarni camelCase formatida qaytaring.
function toCamelCase(obj = {}) {
   let newObj = {};
   for (const key in obj) {
        let newKey = key.replaceAll('-', '_').replaceAll('_','').toLowerCase();
        newObj[newKey] = obj[key];
        if (typeof obj[key] === 'object') {
            newObj[newKey] = toCamelCase(obj[key]);
        }
   }
   return newObj;
}

// Test case
const obj2 = {
    'first_key': 1,
    'second-key': {
        'third_key': 2
    }
};
// console.log(toCamelCase(obj2)); 
// Output: { firstKey: 1, secondKey: { thirdKey: 2 } }

// Berilgan ob'ekt ichidagi barcha stringlarni berilgan funksiya yordamida o'zgartiring.
function transformStrings(obj, transformFunc) {
    let newObj = {};
    for (const key in obj) {
        if (typeof obj[key] ==='string') {
            newObj[key] = transformFunc(obj[key]);
        } else if (typeof obj[key] === 'object') {
            newObj[key] = transformStrings(obj[key], transformFunc);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

// Test case
const obj3 = {
    a: "hello",
    b: {
        c: "world",
        d: {
            e: "test"
        }
    }
};
// console.log(transformStrings(obj3, str => str.toUpperCase())); 
// Output: { a: "HELLO", b: { c: "WORLD", d: { e: "TEST" } } }




// Berilgan ob'ekt ichidagi barcha kalitlarni sorted tartibda qaytaring.
function sortKeys(obj) {
    let newObj = {};
    let keys = Object.keys(obj);
    keys.sort();
    for (const key of keys) {
        newObj[key] = obj[key];
        if (typeof obj[key] === 'object') {
            newObj[key] = sortKeys(obj[key]);
        }
    }
    return newObj;
}

// Test case
const obj4 = {
    b: 2,
    a: 1,
    c: 3
};
// console.log(sortKeys(obj4)); 
// Output: { a: 1, b: 2, c: 3 }

// Berilgan massiv ichidagi elementlarni qatorga birlashtiring, faqat takrorlanmaydigan elementlarni saqlang.
function uniqueConcat(arr = []) {
    let newArr = []
    for (const item of arr) {
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    }
    return newArr.join('');
}

// Test case
// console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd'])); 
// Output: "abcd"



// Berilgan massiv ichidagi o'xshash elementlarni toping.
function findDuplicates(arr = []) {
   let newArr = arr.filter((item, index) => arr.indexOf(item)!== index);
   return newArr;
}

// Test case
// console.log(findDuplicates([1, 2, 3, 1, 2, 4])); 
// Output: [1, 2]