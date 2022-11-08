  
// ke boro r k choto ? sata proman kora holo.

// if else ar maddhome সমাধান

var a = 15;
var b = 69;

if(a > b){
    console.log("a is bigger", a);
}
else{
    console.log("b is bigger", b);
}



// Math.max and array ar maddhome সমাধান.

 var a = 77;
 var b = 100;
 
var max = Math.max(a, b);
console.log("max value is ", max);



// arry and fooor loop ar maddhome সমাধান

var nums = [4, 7, 1, 34, 56, 112, 65, 43];
var largest = nums[0];

for(var i = 0; i < nums.length; i++){
    var element = nums[i];
    if(element > largest){
        largest = element;
    }
}
console.log("largest is", largest);