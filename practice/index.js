// function calcValues(a, b) {
//     return [
//         a + b,
// a - b,
//         a * b,
//         a / b
//     ]
// }

// const [sum, sub = 'tttt', mult, ...other] = calcValues(42, 10)

// const sum = result[0]
// const sub = result[1]



// 

// Objects

// const person = {
//     name: 'Max',
//     age: 26,
//     address: {
//         country: 'Russia',
//         city: 'Moscow'
//     }
// }

// // const {name: firstName = 'Bez imeni', 
// // age, 
// // car = 'Mashini net',
// // address: {city: homeTown, country}
// // } = person

// // const {name, ...info} = person

// // console.log(name, info)

// function logPerson({name: firstName = '111', age}) {
//     console.log(firstName + ' ' + age)
// }

// logPerson(person)


const myNumber = 42

// localStorage.removeItem('number')

// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))
// localStorage.clear()

const object = {
    name: 'max',
    age: 20
}

// localStorage.setItem('person', JSON.stringify(object))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'vlad'

// console.log(person)


window.addEventListener('storage', event => {
    console.log(event)
})
