
// একটি সংখ্যার ফ্যাক্টরিয়াল হল 1 থেকে সেই সংখ্যা পর্যন্ত সমস্ত সংখ্যার গুণফল। 

//  উদাহরণ :

//  5 এর ফ্যাক্টরিয়াল 1 * 2 * 3 * 4 * 5 = 120 এর সমান। 
//  ঋণাত্মক সংখ্যার ফ্যাক্টরিয়াল নেই এবং 0 এর ফ্যাক্টরিয়াল হল 1।


function factorial (number) {


   var factorial = 1 ;

//    Ekhane forloop ar babohor korbo 

for  (var i = 1; i <= number; i++ ) 

factorial = factorial * i ;

return factorial ;

}

// Function and Forloop ar maddhome factorial framwork toiri korlam.


var result = factorial (4)

console.log (result)


// OUTPUT 24 