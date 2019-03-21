let words = ['hello', 'dad', 'i', 'Made', 'cODE', 'i', 'thInk', 'hello', 'code', 'I'], count = [];

for (let x of words) {
	x = x.toLowerCase();
	count.push([x, 1]);
	for (i = (count.length - 2); i >= 0; i--) {
		num = +count[i].slice(1, 2)
		if (x == count[i].slice(0,1)) {
			count[i] = [x, (num + 1)];
			count.pop();
		};
	};
};

console.log(count);

/*
Some things I learned from this exercise:

don't use pop, shift, etc. for comparison / testing.
It will modify original array, so use slice instead.

If you want to search the array for an element, don't include in the search
the element you just added and are searching for!

You can't really use variables / iterables as keys for objects. Kinda sux

Be careful when nesting for loops. Putting a command in the wrong place can lead to
it being run many more times than you wanted.*/