// class DUser {
//     constructor(public name: string, public age: number) {
//     }
//
//     public getPass(): string {
//         return `${this.name}`;
//     }
// }

//Декоратор - должен принимать конструктор декорируемой сущности
const logClass = (constructor: Function) => {
    console.log(constructor)
}

@logClass
class DUser {
    constructor(public name: string, public age: number) {
    }

    public getPass(): string {
        return `${this.name}`;
    }
}

//Декораторы бывают разных типов : Класс Свойства Метода Акссесора

// Property Decorator
const logProperty = (target: Object, propertyKey: string | symbol) => {
    console.log(propertyKey);	// Result of call: "secret"
};

class DPUser {

    @logProperty		// <--- Apply decorator for property
    secret: number;

    constructor(public name: string, public age: number, secret: number) {
        this.secret = secret;
    }

    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// Method Decorator
const logMethod = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) => {
    console.log(propertyKey);   // Result of call: "getPass"
};

class MDUser {

    constructor(public name: string, public age: number) {
    }

    @logMethod			// <--- Apply decorator for method
    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}