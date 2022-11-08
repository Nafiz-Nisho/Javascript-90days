
// ar moddhe sob theke boro element

// using arry 

var marks = [33,50,85];

// amra jani arry index 0 theke start hoi tai --

var max = marks [0];

// using for loop and i mane index

for (var i = 0; i < marks.length; i++ ) {
    var element = marks [i];
    
    // if - condition 

    if (element > max){

        max = element ;
    
    }
}

console.log(max)

// output 85

