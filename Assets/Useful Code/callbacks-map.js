var myArray = [1, 2, 3];

var map = function (inputArray, callback, print) {
    var newArr = [];
    
    if(print) {
        for (var i = 0; i < inputArray.length; i++) {
            newArr.push(print(callback(inputArray[i])));
        }
    } 
    else {
        for (var i = 0; i < inputArray.length; i++) {
            newArr.push(callback(inputArray[i]));
        }
        
    }
    return newArr;
};

var timesBy = function (num) {
    return (function (num, index) {
        return num * index;
    }.bind(this, num));
};

var print = function (cb) {
    return function (index) {
        console.log(index);
        return index;
    }.bind(this, cb)();
};

var result = map(myArray, timesBy(3), print);
console.log(result);

//  myArray = [cb(1), cb(2), cb(3)];