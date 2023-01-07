// now need arry for rainbow color 


const colors = [ 'red', 'yellow', 'green' , 'blue', 'orange', 'purple', 'violet', 'indigo' ];

//  Completed  Make arry

const container = document.querySelector('section');

const h2 = document.querySelector('h2');

// Completed Make variable


for  ( let color of colors)
{
   const box = document.createElement('div') 

   box.classList.add('box');

   container.appendChild(box)

   box.style.backgroundColor = color ;

   box.addEventListener( 'click' , function(){
 
   h2.innerText = " vai valo hoye geci "

   })  
}