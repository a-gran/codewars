// my decision

const summation = function (num) {
	let sum = 0;
	let i = 1;
	while (i <= num) {
		sum += i;
		i++;
	}
	return sum;
};

// the best decision

const summation = (n) => (n * (n + 1)) / 2;
