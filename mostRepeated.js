function maxRep(arr, n){
    const map = new Map();
    let max = 0;
    let ele = 0;
    for(let i of arr){
        if(map.get(i)){
            map.set(i , map.get(i) + 1);
            if(map.get(i) > max){
                max = map.get(i);
                ele = i;
            }
        }
        else{
            map.set(i , 1);
        }
    }

    console.log(ele + " " + max);
}

maxRep([1,2,3,2,4,1,2,3,0,0,0,0], 12);