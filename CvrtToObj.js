function cvrt(arr, n){
    const obj = {};

    for(let i of arr){
        if(obj[i]){
            obj[i]++;
        }
        else{
            obj[i] = 1;
        }
    }

    console.log(obj);
}

cvrt([1,2,1,3,4,2,3],7);