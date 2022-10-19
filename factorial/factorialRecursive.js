function factorialRec  (n) {

    // Eta ekta condition
    if (n == 0) {
        
        return 1;
    }
    // Condition ar END 

    // Condition number 2
    else {
     return n * factorialRec (n-1)
    }
    // Conditon number END 
    
}

var result = factorialRec (4)

console.log (result)



// Aro valo kore buzte chaile : https://www.youtube.com/watch?v=wySKkHmwwIo