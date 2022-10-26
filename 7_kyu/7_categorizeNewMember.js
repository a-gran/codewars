// input

let data = [
  [18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]
]

// function

function openOrSenior ( data ) {
  let list = []
  data.map((item) => {
    if (item[0] >= 55 && item[1] > 7) {
      list.push("Senior")
    } else {
      list.push("Open")
    }
  })
  return list
}
 
console.log('openOrSenior(data)', openOrSenior(data))

// another decision

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

function openOrSenior(data){
  return data.map(function(d){
    return d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open';
  });
}