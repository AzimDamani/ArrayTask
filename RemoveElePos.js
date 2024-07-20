// 8.	Remove an element from specified position of an array.

// •	Return the new array after removing the element from array
// •	Return error if the position is not available in array. Position should be less than or equal to the length of an array

// Input	Expected Output
// Array	[10, 20, 30, 40, 50]	[10, 20, 40, 50]
// position	3	


function rem(arr, pos , n){
    if(pos > n){
        return new Error("Position not available");
    }
    else{
        const ans =[];

        let i = 0;
        for(i = 0 ; i < pos-1 ;i ++){
            ans.push(arr[i]);
        }
        i++;
        while(i<n){
            ans.push(arr[i++]);
        }

        return ans;

    }
}

const get = rem([1,2,3,4,3,5,7], 2, 7);
console.log(get);