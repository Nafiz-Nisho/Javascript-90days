
//  How to word count ?


var words = "habib is a good boy. and good parson.";

var count = 0;

for( var i = 0; i< words.length; i++) {

    var charecter = words [i];

    //   && mane holo aro ekta condition

    // =! mane hosse not equal

    if( charecter == " " && words [i-1]  != " " )
    
    {
              count++
    }

          
}
 count++

console.log(count)