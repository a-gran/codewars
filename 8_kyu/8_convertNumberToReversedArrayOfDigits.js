let n = 348597

// #1 My desicion
let digitize = (n) =>
  Array.from(n.toString())
    .reverse()
    .map((item) => +item)

console.log('digitize', digitize(n))
