interface User {
    readonly name: string,
    readonly age: number,

    // [propName: string] : any; //для свободного расширения интерфейсов
    getPassword(): string
}

// const user: User = {name: 'Iskander', age: 2003}


class Iskander implements User {
    name: string = 'Isa';
    age: number = 17;

    getPassword(): string {
        return 'Password'
    }
}