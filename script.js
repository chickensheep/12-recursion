// Fibonacci

const fibs = (n) => {
	const sequence = [];

	if (n == 1) {
		sequence.push(0);
		return sequence;
	}
	if (n == 2) {
		sequence.push(0, 1);
		return sequence;
	}

	sequence.push(0, 1);
	for (let i = 2; i <= n - 1; i++) {
		sequence.push(sequence[i - 1] + sequence[i - 2]);
	}
	return sequence;
};

const sequenceRec = [0, 1];
const fibsRec = (n) => {
	if (n == 1) {
		sequenceRec.splice(1, 1);
		return sequenceRec;
	}

	if (n == 2) {
		return sequenceRec;
	}

	sequenceRec.push(sequenceRec.at(-1) + sequenceRec.at(-2));
	return fibsRec(n - 1);
};

// Merge Sort

const merge = (left, right) => {
	const newArray = [];
	let i = 0;
	let j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			newArray.push(left[i]);
			i++;
		} else {
			newArray.push(right[j]);
			j++;
		}
	}
	return newArray.concat(left.slice(i), right.slice(j));
};

const mergeSort = (array) => {
	if (array.length <= 1) {
		return array;
	}
	const n = Math.ceil(array.length / 2);
	const firstHalf = mergeSort(array.slice(0, n));
	const secondHalf = mergeSort(array.slice(n));

	return merge(firstHalf, secondHalf);
};

console.log(mergeSort([79, 100, 105, 110, 1, 10, 999]));

console.log(fibs(10));
console.log(fibsRec(4));
