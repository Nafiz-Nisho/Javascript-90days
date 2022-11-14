// How to dublicate number vanish by js mathod

var number = [ 1.2,3,3,8,8,7,7 ]

var uniqueNumber = []

for ( var i = 0; i <number.length; i ++){
  
     var element = number [i];
      var index = uniqueNumber.indexOf (element);
      
      if(index == -1 ){
         
        uniqueNumber.push(element)
      }
}

console.log (uniqueNumber)

// output 

[ 1.2, 3, 8, 7 ]
