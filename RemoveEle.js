function rem(arr, ele , n){
    const ans = [];

    let i = 0;

    let found = false;
    for(i = 0 ; i < n ;i++){
        if(arr[i] != ele){
            ans.push(arr[i]);
        }
        else{
            found = true;
        }
    }

    if(found === false){
        return new Error("ERROOROROROROR");
    }
    else{
        return ans;
    }
}

const get = rem([1,2,3,4,5,5,5,5], 2 , 8);

console.log(get);