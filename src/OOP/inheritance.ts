// //Default Class
// class IUser {
//     static secret = 12345;
//
//     constructor(public name: string | number, public age: number) {
//     }
//
//     getPass(): string {
//         return `${this.name} ${IUser.secret}`
//     }
// }
//
// //Default Inheritance
// class Iskander extends IUser {
//     constructor(age: number) {
//         const name: string = 'Iskander'
//         super(name, age);
//     }
//
//     getPass(): string {
//         return `${this.name} ${IUser.secret} + Iskander`
//     }
// }
//
// const iuser = new IUser('Iskander', 17)
// console.log(iuser.getPass());
//
// const isa = new Iskander(17)
// console.log(isa.getPass())
//
// //Abstract classes
// abstract class UserAbstract {
//     constructor(public name: string, public age: number) {};
//
//     greet(): void {
//         console.log(this.name)
//     }
//
//     abstract getPass(): string;
// }