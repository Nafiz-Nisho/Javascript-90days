// Fibonacci Sries way with Recursive and Arry

function fibonaciSeries (n) {

    // Recursive way

 if (n== 0){

    // using arry
    return [0]
 }
 
 else if ( n == 1 ) {
     
    return [0,1]
 }
 else {

    // calculate arry n Element
 
 var fibonacciRecursive = fibonaciSeries (n-1)

 var fiboALL = fibonaciSeries (n-1)

 //   using fibonacci equation

 var nextelement = fiboALL [ n-1 ] + fiboALL [n-2]

  fiboALL.push (nextelement)

  return fiboALL ;

 }

}

var result = fibonaciSeries (10)

console.log(result)

// OUTPUT

// [
//     0, 1,  1,  2,  3,
//     5, 8, 13, 21, 34,
//    55
//  ]