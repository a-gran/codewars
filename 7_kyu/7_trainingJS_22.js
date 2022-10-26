// let arr1 = [4, 5, 6, 7, 8]
// let arr2 = [1, 2]

// console.log(arr1)
// console.log(arr2)
// console.log(arr1[arr2[0]], arr1[arr2[1]])

// #1 desicion
function shuffleIt(arr, ...swapArr) {
  for (let i = 0; i < swapArr.length; i++) {
    let firstNum = swapArr[i][0]
    let secondNum = swapArr[i][1]

    ;[arr[firstNum], arr[secondNum]] = [arr[secondNum], arr[firstNum]]
  }

  return arr
}

// #2 desicion
let shuffleIt = (arr, ...ex) => {
  for ([a, b] of ex) [arr[a], arr[b]] = [arr[b], arr[a]]
  return arr
}
