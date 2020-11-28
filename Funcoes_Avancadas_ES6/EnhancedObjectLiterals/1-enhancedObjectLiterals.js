/*
var obj = {
    prop1: 'Digital Innovation One'
};

*/

/*
var prop2 = 'Digital Innovation One';

var obj = {
    prop2: prop2
}

console.log(obj);
*/

// ES6

var prop2 = 'Digital Innovation One';

var obj = {
    prop2
}

console.log(obj);

function method1() {
    console.log('method called');
}

var obj2 = {
    method1
}

obj2.method1();

var obj3 = {
    sum: function sum(a, b) {
        return a + b;
    }
}

console.log(obj3.sum(1,3));

var obj4 = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj4.sum(5, 5));


var propName = 'test';

var obj5 = {};

obj5[propName] = 'prop value';

console.log(obj5);


var propName2 = 'test';

var obj6 = {
    [propName2 + 'concat']: 'prop value 2'
};

console.log(obj6);