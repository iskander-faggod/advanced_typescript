const cars: string[] = ['ford', 'audi']

//Promises
const promise = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve('Promise')
    }, 2000)
})

promise.then(data => {
    console.log(data)
})

//Functions
function mergeObjects<T, R>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Iskander'}, {age: 18})
console.log(merged)


const withCount = (value: string | any[]) => ({value, count: value.length});

function getObjByValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

//Classes
class Collection<T> {
    constructor(private _items: T[] = []) {
    }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i != item)
    }

    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(['I', 'am', 'strings'])
strings.add('NO!')
console.log(strings.items)

const nums = new Collection<number>([1, 2, 3])
nums.add(1)
console.log(nums.items)


//Interfaces
interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}
    if (model.length > 3) {
        car.model = model
    }
    if (year > 2000) {
        car.year = year
    }

    return car as Car
}

