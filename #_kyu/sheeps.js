const array1 = [true,  true,  true,  false,
                true,  true,  false,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                true, true, true,  true ];

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let sum = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sum++;
        }
    }
    return sum;
}

let result = countSheeps(array1);
console.log(result);