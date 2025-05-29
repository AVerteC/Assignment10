// STEP 1
// class Cat {
//     constructor() {
//     }
// }
// const Dog = class {
//     constructor() {
//     }
// }

// STEP 2
// let cat = new Cat()
// let dog = new Dog()

// STEP 3
// class Animal {
//     constructor() {
//         console.log('The Animal has been created')
//     }
// }
// let creature = new Animal()

// STEP 4
// class Animal {
//     constructor(message) {
//         console.log(message)
//     }
// }
// let creature = new Animal('Animal says something.')

// // STEP 5
// class Animal {
//     type
//     breed
//     color
//     height
//     length
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
// }

// // STEP 6
// let creature = new Animal('cat', 'bengal', 'yellow', '8', '14')
// console.log('Animal Properties: ')
// for (let field in creature) {
//     console.log(`${field} = ${creature[field]}`)
// }

// STEP 7
// class Animal {
//     type
//     breed
//     color
//     height
//     length
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }

//     speak() {
//         let verb = ''
//         if (this.type === 'dog') {
//             verb = 'barking'
//         } else if (this.type === 'cat') {
//             verb = 'meowing'
//         }
//         console.log(`The ${this.color} ${this.type} is ${verb}!`)
//     }
// }

// let cat = new Animal('cat', 'bengal', 'yellow', '8', '14')
// let dog = new Animal('dog', 'dalmatian', 'white', '27', '31')
// cat.speak()
// dog.speak()

// // STEP 8
// class Animal {
//     #type
//     #breed
//     #color
//     #height
//     #length
//     constructor(type, breed, color, height, length) {
//         this.#type = type
//         this.#breed = breed
//         this.#color = color
//         this.#height = height
//         this.#length = length
//     }

//     #checkType() {
//         if (this.#type === 'dog') {
//             return 'dog'
//         } else if (this.#type === 'cat') {
//             return 'cat'
//         }
//     }

//     speak() {
//         let type = this.#checkType()
//         console.log(`"The ${type} has made a noise!"`)
//     }
// }

// let cat = new Animal('cat', 'bengal', 'yellow', '8', '14')
// let dog = new Animal('dog', 'dalmatian', 'white', '27', '31')
// // cat.speak()
// // dog.speak()
// console.log(dog.speak())

// STEP 9
// String.prototype.findWords = function (word) {
//     const regex = new RegExp(word, "gi")
//     let matchCount = this.match(regex)
//     if (matchCount !== null) {
//         alert(`${word} was found ${matchCount.length} times in the paragraph.`)
//     } else {
//         alert(`${word} was found 0 times in the paragraph.`)
//     }
// }
// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.findWords('ain');