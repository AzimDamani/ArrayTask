function evenOddCount(arr, n){
    let even = 0;
    let odd = 0;
    let prime = 0;
    for(let i of arr){
        if(i % 2 == 0){
            even++;
        }
        else if(isprime(i)){
            prime++;
        }
        else{
            odd++;
        }
    }

    function isprime(n){
        for(let i = 2 ; i < n ;i++){
            if(n%i == 0){
                return false;
            }
        }

        return true;
    }


    console.log(even + " " + odd + " " + prime);

}

evenOddCount([7], 1)

