var gage = 0;
var cnt = 0;
var Cat = (function(name , age){
    this.name = name ;
    this.age = age;
    gage = gage + age;
    cnt = cnt+1;
    
    this.getavg = function(){
        return gage / cnt;
    }
}())
const hc = new Cat("huz",2);
// mc.getinfo();
console.log(hc.getavg());

const dc = new Cat("Deep", 5);
console.log(dc.getavg());

const sc = new Cat("Sam", 10);


console.log(sc.getavg());


var x = (function (){} ())

