
let a = [2, 3, 5]

function squareSum(numbers) {
  let sum = 0
  numbers.map(item => sum += item*item)
  return sum
}

console.log('squareSum(a)', squareSum(a))

// другие решения

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
