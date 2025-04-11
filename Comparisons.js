// == just check data
// === checks data and type both


console.log('5' == 5)// true → string '5' is converted to number
console.log('5' === 5)// false → string !== number
console.log(0 == false)// true → false becomes 0
console.log(0 === false)// false → number !== boolean
console.log(null == undefined)   // true → considered equal in loose comparison
console.log(null === undefined)  // false
console.log('' == 0)// true → both become 0
console.log('' === 0)// false → string !== number
console.log([] == '')// true → [] → '' → '' == ''
console.log([] == 0)// true → [] → '' → 0
console.log((NaN == NaN)) //Only NaN in js return false when comparing with each other


