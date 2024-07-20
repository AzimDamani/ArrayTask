function createSecret(n){
    // const ob = {

    //     val : n,
    //     getSercert : function () {
    //         return this.val;
    //     },
    //     setSecret : function (n){
    //         this.val = n;
    //     }
    // }

    // return ob;

    return {
        getSercert : function () {
            return n;
        },

        setSecret : function (x){
            n = x;
            return n;
        }
    }

}


const mysec = createSecret(5);

// console.log(mysec);


mysec.setSecret(10);
console.log(mysec.getSercert());

