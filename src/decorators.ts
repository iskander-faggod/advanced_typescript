//Декоратор - паттерн проективрования = синтаксический сахар

function Log(constructor: Function) {
    console.log(constructor)
}

function Log2(target: any, propName: string | Symbol): any {
}

@Log
class Component {
    @Log2
    name: string

    constructor(name: string) {
        this.name = name
    }
}