// мое решение

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2
    case '-':
      return value1 - value2
    case '*':
      return value1 * value2
    case '/':
      return value1 / value2
  }
}

// элегантное решение 1

function basicOp(operation, value1, value2) {
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}

// элегантное решение 2

basicOp1 = (operation, value1, value2) => eval(value1 + operation + value2)
