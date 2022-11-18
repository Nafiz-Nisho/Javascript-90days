// asule fanction ar moddhe condition ashule kivabe kaaj kore?


function animalCalculator(depth) {
    
    var animal = 0;

    // conditon 1

    if (depth <= 10) {
        animal = depth * 50;
        
        // condition 2 


    } else if (depth <= 20) {
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        animal = firstPart + secondPart;
    } 

    // // condition 3
    
    else {
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart;


    }
    return animal;
}
var count = animalCalculator(10);
console.log(count);

