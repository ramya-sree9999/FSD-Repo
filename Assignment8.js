let arrays = [[1, 2, 3], [4, 5], [6]];

let flattenedArray = arrays.reduce(function(acc, curr) {
    return acc.concat(curr);
}, []);

console.log(flattenedArray);




function loop(value, test, update, body) {
    while (test(value)) { 
        body(value);    
        value = update(value); 
    }
}

loop(3, function(n) { return n > 0; }, function(n) { return n - 1; }, console.log);


console.log("every function using loop");
function every(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }
    return true;
}

console.log(every([1, 3, 5], function(n) { return n < 10; }));
console.log(every([2, 4, 16], function(n) { return n < 10; }));
console.log(every([], function(n) { return n < 10; }));


console.log("every function using some");
function every(array, test) {
    return !array.some(function(element) {
        return !test(element);
    });
}
console.log(every([1, 3, 5], function(n) { return n < 10; }));
console.log(every([2, 4, 16], function(n) { return n < 10; }));
console.log(every([], function(n) { return n < 10; }));
