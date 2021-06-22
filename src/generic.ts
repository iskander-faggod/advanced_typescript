const cars: string[] = ['ford', 'audi']

const promise = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve('Promise')
    }, 2000)
})

promise.then(data => {
    console.log(data)
})


function mergeObjects<T, R>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Iskander'}, {age: 18})
console.log(merged)


const withCount = (value: string | any[]) => ({value, count: value.length});

function getObjByValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}