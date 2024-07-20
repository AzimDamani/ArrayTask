// 3.	Move all Zero’s to Right side of an array.

// You need to Move all Zero’s to the right side of an array.

// Example:

// Input	Expected Output
// Array	[1, 0,2,0,3,0]	[1, 2, 3, 0, 0,0 ]

function moveZero1(arr){
    const narr = [];
    let cnt =0;
    for(let i of arr){
        if(i !== 0){
            narr.push(i);
        }
        else{
            cnt++;
        }
    }
    for(let i = 0 ; i < cnt ; i++){
        narr.push(0);
    }
    console.log(narr);
}

const moverZero2 = (arr) => {
    let cnt =0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] != 0){
            arr[cnt++] = arr[i];
        }
    }

    while(cnt < arr.length){
        arr[cnt++] = 0;
    }

    console.log(arr);
}


moveZero1([1,0,3,4,0,0]);
moverZero2([1,0,3,4,0,0]);