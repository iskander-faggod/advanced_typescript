"use strict";
class UserModificator {
    constructor(name, age, nickName, pass) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}
class UserConstructor {
    constructor(name, age, nickName, pass) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}
class User {
    constructor(name1, age) {
        this.age = 20;
    }
    setAge(age) {
        this.age = age;
    }
    set myAge(age) {
        this.age = age;
    }
}
// user.setAge(30);	// 30
// user.myAge = 31;	// 31
//# sourceMappingURL=classes.js.map