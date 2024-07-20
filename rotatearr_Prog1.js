
// 1.	Left Rotation of an Array

// You need to left rotate array ‘n’ number of times. Rotation rule here is on every rotation first element will go to last place. You need to rotate n number of times.

// Example:

// Input	Expected Output
// Array	[1, 2, 3, 4, 5]	[4, 5, 1, 2, 3]
// n	3	


function rotate(arr, n) {
	for(let i = 0 ; i < n ; i++){
		let ele = arr.shift();
        arr.push(ele);
	}
	console.log(arr);
}

const arr = [1, 2, 3, 4, 5];
const n = 3;

rotate(arr, n);