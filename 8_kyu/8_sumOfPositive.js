// my decision

function positiveSum (arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum
}

// the best decision

let arr = [0, -1, 5, 6, 7]

const positiveSum = (arr) => arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0)

console.log('positiveSum', positiveSum(arr))
