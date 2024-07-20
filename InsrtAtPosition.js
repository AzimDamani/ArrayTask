function insert(arr , pos , n, ele){
    if(pos > n){
        return new Error("Because the position is greater than the given array length");
    }
    else{
        const ans = [];
        let i = 0;
        for(i = 0 ; i < pos ; i++){
            ans.push(arr[i]);
        }
        ans.push(ele);
        while(i < n){
            ans.push(arr[i++]);
        }

        console.log(ans);
        return ans;
    }
}

const get = insert([1,2,3,5], 1 , 4 , 4);
console.log(get);