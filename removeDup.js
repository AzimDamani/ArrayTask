// 5.	Remove the duplicates from the given array and return only the unique elements from the array.



// Example:

// Input	Expected Output
// Array	[1, 0,1, 2,0,2, 3,3,0]	[0,1,2,3]
// Order can be anything, only remove the duplicates.


function dup(arr, n){
	const st = new Set(arr);
	console.log(st);
}

function dup2(arr, n){
    const mp = new Map();
    for(let i of arr){
        if(mp.get(i)){
            mp.set(i , mp.get(i)+1);
        }
        else{
            mp.set(i, 1);
        }
    }

    console.log(mp);

    const narr = [];

    for(let [key, val] of mp){
        narr.push(key);
    }

    console.log(narr);
}

const arr =[2,1,1,3,3,4,2];
dup2(arr , arr.length);