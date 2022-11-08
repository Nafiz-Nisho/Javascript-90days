
// একটি সংখ্যার ভাগশেষ যদি 0 হয় তাহলে এটি পূর্ণ সংখ্যা নয় । 

function PrimeChacker (n) {


    // je huto 1 প্রাইম নয় এবং কম্পোজিটও নয় tai forloop ar moddhe 2 neya hoise

    for (i = 2; i < n; i++ ) {
      
        // Condition : N sonkha i ar vittite vag sesh (%) jodi 0 hoy, tahole Not a prime namber!

        if ( n % i == 0 ) {
           
            return "Not a prime number"
        }
    }   
                  // else

            return "Your number is prime numebr "      
}

   var result = PrimeChacker (29)

    console.log(result)

//  OUTPUT 

// Your number is prime number!