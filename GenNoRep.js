function gen(){
    const arr = new Set();
    while(arr.size < 5){
        let g = Math.floor(Math.random() * 100) + 1;
        arr.add(g);
    
    }

    const ans = [...arr];
    // console.log(ans);
    return ans;
}

const arr = gen();
console.log(arr);