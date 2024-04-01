/**
 * Problem Statement:
 * Given a number n, generate a string pattern that represents steps. 
 * Each step should consist of '#' characters and spaces. The total number of steps should be equal to n.
 *
 */


// version1 -OWN- based on for loop iteration 

function generateSteps(n) {
  // step1 - create a loop based on 'n' iterations
  // step2 - intialize spacer string, use spacer to print'#', add space after every iteration
    let spacer = '   '; // spaces to add on left side of '#'
    let step = '#';
    for (let i = 1; i <= n; i++) {
      console.log(`${step}`);
      step += '#';
      spacer += ' ';
    }
    console.log('\n')  
  }
  
  // Test Cases
  generateSteps(7);
  // Expected Output:
  //   '#  '
  //   '## '
  //   '###'
  
  generateSteps(5);
  // Expected Output:
  //   '#    '
  //   '##   '
  //   '###  '
  //   '#### '
  //   '#####'
  
  generateSteps(0);
  // Expected Output: (empty string)