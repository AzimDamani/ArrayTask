// 2.	Right Rotation of an Array

// You need to right rotate array ‘n’ number of times. Rotation rule here is on every rotation last element will go to first place. You need to rotate n number of times.

// Example:

// Input	Expected Output
// Array	[1, 2, 3, 4, 5]	[3, 4, 5, 1, 2]
// n	3	


function rightRotate(arr, n){
    for(let i = 0; i < n ; i++){
        const pp = arr.pop();
        arr.unshift(pp);
    }

    console.log(arr);
}


const arr =[1, 2, 3, 4, 5];
rightRotate(arr, 3);