
        //      সূত্র  

        //  Simple way : 1x2x3x4x5x6 
        //   ---       : 6 = (6-1) x 8

        // Javascript way : -n = n x (x-1)

function factorialRecursive (n) {

    // Eta ekta condition
    if (n == 0) {
        
        return 1;
    }
    // Condition ar END 

    // Condition number 2
    else {
     return n * factorialRecursive (n-1)
    }
    // Conditon number END 
    
}

var result = factorialRecursive (5)

console.log (result)

// OUTPUT 120

// Aro valo kore buzte chaile : https://www.youtube.com/watch?v=wySKkHmwwIo