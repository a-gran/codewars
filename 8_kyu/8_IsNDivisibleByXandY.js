let n = 100
let x = 11
let y = 5

// #1 desicion
// function isDivisible(n, x, y) {
//   if (!(n % x) && !(n % y)) {
//     return true
//   }
//   return false
// }

// #2 desicion (best)
const isDivisible = (n, x, y) => (!(n % x) && !(n % y) ? true : false)

console.log(isDivisible(n, x, y))
