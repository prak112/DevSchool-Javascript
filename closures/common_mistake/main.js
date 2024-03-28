// ISSUE : closure function in loop without IIFE, loop variable declared with 'var'
const candies = ['dark chocolate', 'belgian chocolate', 'spicy dark chocolate']
for (var i = 0; i < candies.length; i++) {
    setTimeout(function() {
        console.log(`I like ${candies[i]} !`);
    }, 1000);
}
// logs : 
/*
I like undefined !
I like undefined !
I like undefined ! 
*/

// SOLUTION 1 : closure function in loop with IIFE, loop variable declared with 'var'
for (var j = 0; j < candies.length; j++) {
    (function(k){
        setTimeout(function() {
            console.log(`I like ${candies[k]} !`);
        }, 1000);
    })(j);
}
// logs:
/*
I like dark chocolate !
I like belgian chocolate !
I like spicy dark chocolate !
*/


// SOLUTION 2 : closure function in loop without IIFE, loop variable declared with 'let'
for (let i = 0; i < candies.length; i++) {
    setTimeout(function() {
        console.log(`I like ${candies[i]} !`);
    }, 1000);
}
// logs : 
/*
I like dark chocolate !
I like belgian chocolate !
I like spicy dark chocolate !
*/