const people = [
    {name: 'Vlad', age: 25, budget: 40000},
    {name: 'Elena', age: 17, budget: 3400},

    {name: 'Igor', age: 49, budget: 50000},

    {name: 'Misha', age: 15, budget: 1800},

    {name: 'Vasilisa', age: 24, budget: 25000},

    {name: 'Vika', age: 38, budget: 2300}

]

// for(let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for (let person of people) {
//     console.log(person)
// }

//ForEach
// people.forEach(function(person) {
//     console.log(person)
// })

// people.forEach(person => console.log(person))

// map

// const newPeople = people.map(person => `${person.name} (${person.age})`)

// console.log(newPeople)

// FILTER

// const adults = people.filter(person => person.age >= 18)

// console.log(adults)

// reduce

// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget
// }
// const amount = people.reduce((total, person) => {
//     return total + person.budget
// }, 0)


// console.log(amount)

// find

// const igor = people.find(person => person.name === 'Vika')
// console.log(igor)

// // findIndex

// const igorIndex = people.findIndex(person => person.name === 'Vika')
// console.log(igorIndex)

//===================

const amount = people
.filter(person => person.budget > 3000)
.map(person => {
    return {
        info: `${person.name} (${person.age})`, 
        budget: person.budget
    }
})
.reduce((total, person) => total + person.budget, 0)

console.log(amount)
