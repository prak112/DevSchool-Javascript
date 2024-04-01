// Pyramid string pattern
/**
 * Log '#' to represent a pyramid with space on both sides
 */

// Test Cases
// Test Case 1: Pyramid with height 3
/*
Expected Output:
     #
    ###
   #####
*/
pyramidStringPattern(9);

// Test Case 2: Pyramid with height 5
/*
Expected Output:
     #
    ###
   #####
  #######
 #########
*/
pyramidStringPattern(5);

// Test Case 3: Pyramid with height 0
/*
Expected Output:
(empty string)
*/
pyramidStringPattern(0);

// Test Case 4: Pyramid with negative height
/*
Expected Output:
Invalid height
*/
pyramidStringPattern(-3);


// version1 -OWN- based on steps string pattern using for loop
function pyramidStringPattern(n) {
    // step1 - verify input
    if (n <= 0) { return console.log('Invalid Height'); }
    // step2 - *pyramid building logic* - 
        // top level of pyramid has 'n' spaces on both sides, decrements until the last level
    let spacer = ' '.repeat(n);   // based on logic
    let brick = '#'
    for (let i = n; i >= 1; i--) {
        console.log(`${spacer}${brick}${spacer}`);
        brick += '##';  // to compensate both sides spaces
        spacer = spacer.slice(1);
    }
    console.log('\n');
}



