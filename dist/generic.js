"use strict";
const cars = ['ford', 'audi'];
//Promises
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise');
    }, 2000);
});
promise.then(data => {
    console.log(data);
});
//Functions
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Iskander' }, { age: 18 });
console.log(merged);
const withCount = (value) => ({ value, count: value.length });
function getObjByValue(obj, key) {
    return obj[key];
}
//Classes
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i != item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'am', 'strings']);
strings.add('NO!');
console.log(strings.items);
const nums = new Collection([1, 2, 3]);
nums.add(1);
console.log(nums.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
//# sourceMappingURL=generic.js.map