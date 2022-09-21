// const delay = ms => {
//     return new Promise(r => setTimeout(() => r(), ms))
// }

// const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('fetch todo started...')
//     return delay(2000).then(() => {
//         return fetch(url)
//     }).then(responce => responce.json())
// }

// fetchTodos()
// .then(data => {
//     console.log('Data: ', data)
// })
// .catch(e => console.error(e))


// async function fetchAsyncTodos() {
//     console.log('fetch todo started...')
//     try{
//         await delay(2000)
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log('Data: ', data)
//     }
//     catch(e) {
// console.error(e)
//     } finally{

//     }
    
// }

// fetchAsyncTodos()

const person ={
    name: 'vlad',
    age: 25,
    job: 'fullstack'
}

const op = new Proxy(person, {
    get(target, prop) {
    //    console.log(`Getting prop ${prop}`)
       if(!(prop in target)) {
return prop
.split('_')
.map(p => target[p])
.join(' ')
       }
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop)
        delete target[prop]
        return true
    }
})


const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn...')
        return target.apply(thisArg, args).toUpperCase()

    }
 })


 class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
 }

 const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Construct...')
        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log(`Getting prop "${prop}"`)
                return t[prop]
            }
        })
    }
 })

 const p = new PersonProxy('Maxim', 30)

