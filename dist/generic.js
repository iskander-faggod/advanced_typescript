"use strict";
const cars = ['ford', 'audi'];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise');
    }, 2000);
});
promise.then(data => {
    console.log(data);
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Iskander' }, { age: 18 });
console.log(merged);
//# sourceMappingURL=generic.js.map