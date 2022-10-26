// my decision

let x = " dfdfd dfdf ddd llll    o";

function noSpace(x) {
	let newStr = [];
	let result = "";

	for (let i = 0; i < x.length; i++) {
		if (x[i] !== " ") {
			newStr.push(x[i]);
		}
	}

	for (let j = 0; j < newStr.length; j++) {
		result += newStr[j];
	}

	return result;
}

noSpace(x);

console.log("noSpace(x)", noSpace(x));

// the best decision

const noSpace = (x) => x.split(' ').join('')
