/*
+ dominated by string
- , / , * dominated by numbers

Implicit Type Conversion (Type Coercion)
JavaScript automatically converts data types.
Explicit Type Conversion
You manually convert using functions like Number(), String(), etc.
*/


//Explicit type conversion
console.log(Number("10") )        // 10
console.log(Number("10abc"))      // NaN
console.log(Number(true))         // 1
console.log(Number(false))        // 0
console.log(Number(null))         // 0
console.log(Number(undefined))    // NaN

console.log(String(123))          // "123"
console.log(String(true))         // "true"
console.log(String(null))         // "null"
console.log((123).toString())     // "123"


console.log(Boolean(1))           // true
console.log(Boolean(0))           // false
console.log(Boolean("hello"))     // true
console.log(Boolean(""))          // false
console.log(Boolean(null))        // false
console.log(Boolean(undefined))   // false



//Implicit Type Conversion
console.log('5' + 2);       // "52"   → number converted to string
console.log('5' - 2);       // 3      → string converted to number
console.log('5' * '2');     // 10     → both converted to numbers
console.log(true + 1);      // 2      → true becomes 1
console.log(false + '1');   // "false1" → false becomes string
