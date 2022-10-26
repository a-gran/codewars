let s = 't'

// #1 решение
function getMiddle(s) {

  if (s.length % 2 == 0) {
    let el1 = s[s.length / 2 - 1]
    let el2 = s[s.length / 2]
    return el1 + el2
  } else {
    let middleInd = (s.length - 1) / 2
    return s[middleInd]
  }

}

// #2 решение
function getMiddle(s) {
  return s.length % 2 == 0 ? s[s.length / 2 - 1] + s[s.length / 2] : s[(s.length - 1) / 2]
}

// #3 решение
let getMiddle = s => s.length % 2 == 0 ? s[s.length / 2 - 1] + s[s.length / 2] : s[(s.length - 1) / 2]

getMiddle(s)
console.log('getMiddle(s)', getMiddle(s))


