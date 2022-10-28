
       // ফিবোনাচি সিকোয়েন্স

       // ফিবোনাচি সিকোয়েন্স হল সংখ্যার সিরিজ:

       // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
           
       // example

      // 0,1   mile hoise = 1
      // 1,1   mile hoise = 2
      // 1,2,  mile hoise = 3
      // 2,3   mile hoise = 5
      // 3,5   mile hoise = 8
      // 5,8   mile hoise = 13
      // 8,13  mile hoise = 21
      // 13,21 mile hoise = 34

      // এর আগে দুটি সংখ্যা যোগ করে পরবর্তী সংখ্যাটি পাওয়া যায়
// -----------------------------------------------------

              // নিয়ম

            // x n = x n−1 + x n−2

            // x n হল শব্দ সংখ্যা "n"

            // x n−1 হল পূর্ববর্তী পদ (n−1)

            // x n−2 হল তার আগের শব্দ (n−2)

            // ager 2ta sonkha jog hoye hoye kaaj kore 

          //   https://youtube.com/clip/UgkxrrjrDVSEg0cVF8V1ZMU_XTIgIg_3pPIG

//--------------------------------------------------------------------------------

function fibonacci (n){

  // using arry 

  var fibo = [0, 1];

  // END 

  // using for loop 

  for (var i = 2; i <= n; i++) {

//  using fibo nacci equation 

   // x9	= x9−1 + x9−2

   fibo[i] = fibo [i-1] + fibo [i-2] ;

  //  X ta holo 'fibo' 9 ta holo 'i' jeta amra call korbo. r baki ta sutrer dike takalei buzte parbo.

  }

   return fibo ;

}

var result = fibonacci (7)

console.log(result)

// Output 

  // 0, 1, 1,  2,
  // 3, 5, 8, 13

  