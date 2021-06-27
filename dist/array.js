"use strict";
let list = [10, 20, 30];
let colors = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);
// const people = ["Tom", "Bob", "Sam"];
// people[1] = "Kate";
// console.log(people[1]); // Kate
// const people: readonly string[] = ["Tom", "Bob", "Sam"];
// people.push('Iskander') // Ошибка! Тип не изменяется.
function printUsers(users) {
    for (const user of users) {
        console.log(user);
    }
}
function usersToString(users) {
    return users.join(", ");
}
const people = ["Tom", "Bob", "Sam"];
printUsers(people);
console.log(usersToString(people));
//Декомпозиция
// const people: string[]= ["Tom", "Bob", "Sam"];
const [first, second, third] = people;
console.log(first); // Tom
console.log(second); // Bob
console.log(third); // Sam
//# sourceMappingURL=array.js.map