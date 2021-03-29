console.log(this === global) //false
console.log(this === module) //false

console.log(this === module.exports) //true
console.log(this === exports) //true

function logThis() {
    console.log('Dentro de uma função, o this é...')
    console.log(this === exports)
    console.log(this === global)
}

logThis() //falso, o this só é === exports fora de uma função, más ele aponta verdadeiro para global

// o this dentro de uma função aponta para global, já fora de uma função, ele aponta para module.exports ou exports