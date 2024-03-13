# Practice Platforms 
- HackerRank <!--add solutions to orphan branch-hackerrank-->
- CodeWars <!--add solutions to orphan branch-codewars-->
- Chrome Browser console (Best debugger ever!)
    - *in a new Chrome browser tab, just press F12*
- VS Code

# Contents
- [Closures](#closures)
    - [What is it ?](#what-is-it)
    - [Beneficial for...](#beneficial-for)
    - [Common Mistake](#common-mistake)
    - [Doubts](#doubts)
    - [Practical Use Cases](#practical-use-cases)


<br>
<hr>

# Concepts Learned
- Check [CS50 W README](https://github.com/prak112/cs50-webdev/blob/main/javascript/README.md) for :
    - Functions
    - DOM and EventHandling<!--to add description/example-->
    - AJAX
    - Promise <!--refine understanding-->

## Closures
- *Closure* is the concept of defining and understanding the behaviour of nested-functions in Javascript.
- Although, nested-functions are prominent among different programming languages, their functionality for acting like a *Closure* is different.


### What is it ?
*with reference to C# and Python*

- By defintion, it is the *lexical scope* of a nested-function
- *Lexical scope* is defined as the sorrounding environment of a code section (variable/function) that can be accessed during compilation of the source code

( *All JavaScript examples below have either been executed in [Chrome console](#practice-platforms) or in VSCode* )

<details>
    <summary><b>More about Scope of Variables - Lexical vs Dynamic</b></summary>
    Source : <cite>GitHub CoPilot Chat</cite>

<br>

Lexical scope (also known as static scope) and dynamic scope are two different ways that programming languages determine the scope, or visibility, of variables.

1. **Lexical Scope**: 
 - In languages with lexical scoping (like JavaScript, Python, C#, and most other modern languages), the scope of a variable is determined at compile time based on where the variable is defined in the source code. 
 - In lexical scoping, a function can access variables defined in its own scope, the scope of any containing functions, and the global scope. 

2. **Dynamic Scope**: 
 - In languages with dynamic scoping (like some versions of Lisp, or when using `eval` in JavaScript), the scope of a variable is determined at runtime based on the sequence of function calls that led to the current execution context. 
 - In dynamic scoping, a function can access variables defined in its own scope, the scope of the function that called it, the scope of the function that called that function, and so on up to the global scope.

The key difference is that lexical scope is based on where variables are declared in the source code, while dynamic scope is based on the program's call stack at runtime. 

Most modern programming languages use lexical scoping because it's easier to understand and predict.

</details>

<br>

- In Javascript:
    - Nested-functions are termed as *Closures* and are defined to have access to the variables in its *lexical scope*, including
        - **Local** (its own),
        - **Enclosing/Outer** (function/block/module)
        - **Global**
    ```javascript
    function outerFunction(outerVariable){
        return function innerFunction(innerVariable){
            console.log(`Outer function variable + Inner function variable : ${innerVariable} + ${outerVariable}`);
        }
    }

    const closureFunction = outerFunction('outside');
    closureFunction('inside'); // logs: Outer function variable + Inner function variable : outside + inside
    ```

- In C#:
    - they are termed as 'Local Functions' and are defined in a similar way with outer-scope access of their (outer function) local variables. 

    ```csharp
    public class Program
    {
        public state void Main()
        {
            void OuterFunction(string outerVariable)
            {
                void InnerFunction(string innerVariable)
                {
                    Console.WriteLine($"Outer function variable + Inner function variable : {innerVariable} + {outerVariable});
                }
                InnerFunction("inside");
            }
            OuterFunction("outside");
        }
    }
    ```
    - However, `InnerFunction` *lexical scope* is limited to **Local** environment, BUT Global scope variables can also be accessed by addressing through the `Class` like `Class.variableName`

- In Python: 
    - *Lexical scope* of nested-functions is similar to Javascript's *Closure* functions 
    ```python
    def outer_function(outer_variable):
        def inner_function(inner_variable):
            nonlocal outer_variable
            print(f"Outer function variable + Inner function variable : {outer_variable} + {inner_variable}")
        return inner_function
    
    nested_function = outer_function('outside')
    nested_function('inside')   # prints : Outer function variable + Inner function variable : outside + inside
    ```
    - However, the variables cannot be modified UNLESS they are declared as `nonlocal` or `global` inside the inner function for **Enclosing/Outer** or **Global** accessibility.

<br>

[Back To Contents](#contents)
<br>

### Beneficial for...
- Emulating features related to object-oriented programming in terms of :  
    - associating data/client-side interaction to a specific function/method,
        - see [example](/closures/practical_closure)

    - restricting variables/methods access, a.k.a data hiding and encapsulation
    ```javascript
    // define closure function with private functions/variables, returns only object with public functions as properties
    const candy = (function () {
        let secretFilling = 'milk chocolate';   // private variable
        function changeFilling(filling){     // private method
            secretFilling += ', ' + filling;
        }
        return {    // public methods
            addButterScotch() {
                changeFilling('butterscotch');
                console.log('Added softy smoothness!');
            },

            addCaramel() {
                changeFilling('caramel');
                console.log('Added tangy sweetness!');                
            },

            addDarkChocolate() {
                changeFilling('dark chocolate');
                console.log('Added bitterness!');
            },

            showFilling() {
                return secretFilling;
            },
        };
    })();

    // log candy filling -- can only reference return functions
    candy.showFilling();    // 'milk chocolate'
    candy.addDarkChocolate(); // Added bitterness!
    candy.secretFilling;    // undefined
    candy.addCaramel();     // Added tangy sweetness!
    candy.showFilling();    // 'milk chocolate, dark chocolate, caramel'
    candy.changeFilling('butterscotch'); // Uncaught TypeError: candy.changeFilling is not a function
    candy.changeFilling; // undefined
    ```
    
    - managing the *Closure* scope anywhere between **Local**, **Enclosed** or **Global**

    ```javascript
    // Global scope

    const cookie = 5;
    function multiply(number){
        return (inner1) => {
            return (inner2) => { 
                return number * inner1 * inner2 * cookie; // has access to outer functions' scope, i.e., methods and variables
            }; 
        }; 
    }

    console.log(multiply(2)(3)(4)); // logs: 120
    ```
    ```javascript
    // Enclosed scope (Block)

    function candy() {
        let getFilling;
        {   // empty block definition
            const filling = 'dark chocolate';   // private variable
            getFilling = () => filling;     // accessed by arrow function
        }
        console.log(`Candy has ${getFilling()} filling!`);
        console.log('Candy filling is', + typeof filling)
    }

    console.log(candy());   // logs: 
    //  Candy has dark chocolate filling!
    //  Candy filling is NaN
    ```
    - see [Enclosed scope (Module) example](/closures/scope_chain)

### Common Mistake
- Using *Closure* function inside a loop without an Immediately Invoked Function Expression (IIFE)
- Using *Closure* function inside a loop using `var` instead of `let` to declare loop variable
- Check [Doubts](#doubts) 1 & 2, for detailed understanding of the issue 
- See [example](/closures/common_mistake/main.js)

[Back To Contents](#contents)
<br>


### DOUBTS
Learning Buddy : [![built with Codeium](https://codeium.com/badges/main)](https://codeium.com)
1. **How to create a new lexical environment ?**
    - *In simple terms, every time a function is called, a new lexical environment is created.*
    - *Functions created for such purposes are termed as IIFE*

2. **What is the use of creating a new lexical environment or an IIFE ?**
    - *IIFE is useful for preventing closure function issues inside loops, i.e., simply put- capturing only the final value of loop variable*
    - *An IIFE can capture and store the loop variable at the specific iteration and execute the IIFE at that specific iteration value* 

- *However, a cleaner and simpler solution for handling the issue of closure function in loops is to declare loop variables with `let` instead of `var`*, thus :
    - creating a new binding for each loop iteration, leading to a new lexical environment for each iteration
    - resulting in correctly capturing the loop variable for the inner functions

-  [Common Mistake example](/closures/common_mistake/main.js) clarifies question 1 & 2.

<br>

3. **How to identify when a lexical environment is shared ?**


<br>

[Back To Contents](#contents)
<br>


### Usage
- *Closure* functions are considered to be memory and speed consuming and hence, computation-intensive
- Hence, it is a given that they should not be declared if not needed for a specific task.
- For example, *closure* functions/methods should not be created in a Class constructor, rather they should be defined within the Class prototype.
    - This is due to the fact that every time a Class instance is created, the *closure* functions would be reassigned, leading to unnecessary computational power usage.

### Practical Use Cases
Source : <cite>GitHub CoPilot</cite>

1. **Data Privacy / Emulating Private Methods**: 
- closures can be used to emulate private methods, which are not natively supported. 
- allows you to hide implementation details and only expose an API that other parts of your code can interact with.

    ```javascript
    function Counter() {
    let count = 0;
    this.incrementCount = function() {
        count++;
    };
    this.getCount = function() {
        return count;
    };
    }

    const counter = new Counter();
    counter.incrementCount();
    console.log(counter.getCount()); // 1
    console.log(counter.count); // undefined
    ```

2. **Creating Function Factories**: 
- Closures can be used to create function factories, i.e., functions that return other functions with specific behaviors.

    ```javascript
    function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier;
    };
    }

    const double = createMultiplier(2);
    console.log(double(5)); // 10
    ```

3. **Implementing Memoization**: 
- Closures can be used to implement memoization, a technique used to speed up programs by storing the results of expensive function calls and reusing them when the same inputs occur again.

    ```javascript
    function memoize(fn) {
    const cache = {};
    return function (...args) {
        const stringifiedArgs = JSON.stringify(args);
        return cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args);
    };
    }
    ```

4. **Maintaining State in Asynchronous Callbacks**: 
- Closures can be used to maintain state in asynchronous callbacks, where variables may change their value before the callback is executed.

    ```javascript
    for (let i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
    }
    ```

- In this example, a closure is used to capture the current value of `i` for each iteration, ensuring that the correct value is logged when the timeout function is called.

[Back To Contents](#contents)
<br>