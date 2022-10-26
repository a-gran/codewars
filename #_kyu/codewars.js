// #1

/*
You will be given an array (a) and a value (x). All you need to do is check whether 
the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array 
contains the value, false if not. With strings you will need to account for case.


Вам будет дан массив (а) и значение (х). Все, что вам нужно сделать, это проверить, 
содержит ли предоставленный массив значение, без использования цикла.

Массив может содержать числа или строки. Х может быть либо. Вернуть true, 
если массив содержит значение, и false, если нет. Со строками вам нужно будет учесть случай.
*/

// #2

/*
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.
Return your answer as a number.

Учитывая массив целых чисел в виде строк и чисел, 
вернуть сумму значений массива, как если бы все были числа.
Верните свой ответ в виде числа.
*/

// поиск решения

/*
let array = [4, 5, '5'];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i]); 
}
    
console.log(sum);
*/

// рефакторинг и ответ

/*    
let x = [4, 5, '5', '9', 10];

function sumMix(x){
    let sum = 0;
    
    for (let i = 0; i < x.length; i++) {
        sum += parseInt(x[i]); 
  }

  return sum;
}

console.log(sumMix(x));
*/
