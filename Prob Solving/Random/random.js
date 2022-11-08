
// mone koro ami ekta lottary event banaici jekhane vaggoban 10 joner moddhe ek joner number uthbe.

var price = 3.991;

var rounded = Math.floor(price);

for (var i = 0; i<10; i++){

    var random = Math.random();

    var floored = Math.round(random*10);

    console.log(floored);
}
