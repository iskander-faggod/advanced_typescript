"use strict";
//Default Class
class IUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return `${this.name} ${IUser.secret}`;
    }
}
IUser.secret = 12345;
//Default Inheritance
class Iskander extends IUser {
    constructor(age) {
        const name = 'Iskander';
        super(name, age);
    }
    getPass() {
        return `${this.name} ${IUser.secret} + Iskander`;
    }
}
const iuser = new IUser('Iskander', 17);
console.log(iuser.getPass());
const isa = new Iskander(17);
console.log(isa.getPass());
//Abstract classes
class UserAbstract {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    greet() {
        console.log(this.name);
    }
}
//# sourceMappingURL=inheritance.js.map