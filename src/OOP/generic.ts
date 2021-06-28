//Problem
const getter = (data: any) => data;

getter(10).length //undefined
getter('test').length //4

//Solve problem
const newGetter = <T>(data: T): T => data
newGetter<number>(10)
newGetter<string>('test')


//with Classes

class CUser {
    constructor(public name: string, public age: number) {
    }

    public getPass(): string {
        return `${this.name}`;
    }
}

class GUser<T> {
    constructor(public name: T, public age: T) {
    }

    public getPass(): string {
        return `${this.name}`;
    }
}