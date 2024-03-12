# Agenda
 - Learn Fundamentals of Javascript, React JS, Redux, React Native
 - Learn Advanced concepts in Javascript
 - Implement [Course Project](#course-project---tbd)
 - Check [Learning Plan](#learning-plan) for details

# Resources
- [CS50 Web Programming (CS50 W)](https://youtube.com/playlist?list=PLhQjrBD2T380xvFSUmToMMzERZ3qB5Ueu&si=fESzUI9mLIPKQBlQ) - YouTube playlist
- [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) - Learning through building projects

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Documentation reference and Guidebook

<br>

# Progress
- See [Notes](NOTES.md)

- Javascript Fundamentals practice 
    - **freeCodeCamp** - Text-based Role Playing Game
        - Check [Project](https://github.com/prak112/DevSchool-Javascript/tree/text-rpg)
        - [Play](https://prak112.github.io/DevSchool-Javascript/)
    - **CS50 W** 
        - [Implementation of concepts](https://github.com/prak112/cs50-webdev/tree/main/javascript)


<br>

# Current Focus
```mermaid
graph TD
A[FUNDAMENTALS] -->Conditionals & Loops & Arrays & Objects & DocumentObjectModel


B[ADVANCED CONCEPTS] --> Closures & Hoisting & AsynchronousProgramming
```

# Future Focus
```mermaid
graph TD
C[FRAMEWORKS] --Web Development-->D[React]
C --State Management-->E[Redux]
C --Mobile Development-->F[ReactNative]
G[COURSE PROJECT] -->MobileApplication-TBD
```
- Learning *React JS* & *Redux* fundamentals would provide advantage in smooothening the learning curve with *React Native*

 - Check [Learning Plan](#learning-plan) for details


<br>
<hr>

# Course Project - TBD
- To decide between Simplified RPG or Week Planner or Booking System

## Technology Requirements
- Requirements listed from discussions with :
    -   Teacher (Teemu Turunen), 
    -   [Bing AI](https://sl.bing.net/dEhXls9KsqO), 
    -   [Geek4Geeks](https://www.geeksforgeeks.org/introduction-react-native/?ref=lbp)

- [X] Installation of NodeJS
- [ ] Basic knowledge in React 
- [ ] Basic knowledge in ReactNative

## Overview
- The mobile application will be a **Hybrid Application** with the following specifications 

<table style="border: 1px solid; border-collapse: collapse;">
    <tr>
        <th>Hosting Platforms</th>
        <td>iOS, Android</td>
    </tr>
    <tr>
        <th>Frontend</th>
        <td>HTML5, TailwindCSS, Javascript</td>
    </tr>
    <tr>
        <th>Backend</th>
        <td>React Native</td>
    <tr>
    <tr>
        <th>IDE</th>
        <td>VS Code</td>
    </tr>
    <tr>
        <th>Testing (<i>extensions</i>)</th>
        <td>Android Emulator, iOS Simulator or MobileView</td>
    </tr>
    <tr>
        <th>Debugging (<i>extensions</i>)</th>
        <td>React Native Debugger</td>
    </tr>
</table>

<br>


# Learning Plan
- Mastering these concepts is considered essential for a structured path to effectively learn and implement the development of the Mobile Applicaiton using React Native, Redux, and Tailwind CSS.

<table>
    <thead>
        <tr>
            <th>CATEGORY</th>
            <th>Concepts to Learn</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>JavaScript Fundamentals</td>
            <td>
                <ul>
                    <li><input type="checkbox">Variables, Data Types, Operators, Control Structures (if/else, switch, loops)</li>
                    <li><input type="checkbox">Function Declarations, Function Expressions, Arrow Functions, Parameters, Return Values</li>
                    <li><input type="checkbox">Creating Arrays, Accessing Array Elements, Array Methods (map, filter, reduce), Spread/Rest Operators</li>
                    <li><input type="checkbox">Creating Objects, Accessing Object Properties, Object Methods, Object Destructuring</li>
                    <li><input type="checkbox">Global Scope, Local Scope, Block Scope, Hoisting, Lexical Scope</li>
                    <li><input type="checkbox">Closure Concept, Scope Chain, Practical Use Cases</li>
                    <li><input type="checkbox">Promises, Async/Await, Fetch API, Handling Asynchronous Operations</li>
                    <li><input type="checkbox">Understanding DOM, Selecting DOM Elements, Manipulating DOM Elements, Event Handling</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>React Basics</td>
            <td>
                <ul>
                    <li><input type="checkbox">Creating Components, JSX Syntax, Rendering Components, Props</li>
                    <li><input type="checkbox">State, setState, Class Components vs Functional Components</li>
                    <li><input type="checkbox">componentDidMount, componentDidUpdate, componentWillUnmount</li>
                    <li><input type="checkbox">Handling Events, Synthetic Events in React</li>
                    <li><input type="checkbox">Conditional Rendering using if statements and ternary operators</li>
                    <li><input type="checkbox">Rendering Lists, Keys in React</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>ES6 Features and Functional Programming</td>
            <td>
                <ul>
                    <li><input type="checkbox">Arrow Functions Syntax, Lexical `this`</li>
                    <li><input type="checkbox">Object Destructuring, Array Destructuring</li>
                    <li><input type="checkbox">Spread Syntax, Rest Parameters</li>
                    <li><input type="checkbox">Class Syntax, Constructors, Class Inheritance</li>
                    <li><input type="checkbox">Exporting and Importing Modules, Default and Named Exports</li>
                    <li><input type="checkbox">Functions as First-Class Citizens, Function Composition</li>
                    <li><input type="checkbox">Immutable Data Structures, Benefits of Immutability</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Asynchronous JavaScript</td>
            <td>
                <ul>
                    <li><input type="checkbox">Creating Promises, Chaining Promises, Error Handling</li>
                    <li><input type="checkbox">Async/Await Syntax, Handling Errors, Async Function Expressions</li>
                    <li><input type="checkbox">Making HTTP Requests, Handling Responses, Error Handling</li>
                    <li><input type="checkbox">Parallel and Sequential Execution, Promise.all, Promise.race</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Redux</td>
            <td>
                <ul>
                    <li><input type="checkbox">Store Creation, Store Methods, getState, dispatch, subscribe</li>
                    <li><input type="checkbox">Action Types, Action Creators, Payload</li>
                    <li><input type="checkbox">Reducer Functions, Pure Functions, Handling State Updates</li>
                    <li><input type="checkbox">Thunk, Saga, Logger Middleware</li>
                    <li><input type="checkbox">Immutability, Immutable.js Library (optional)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Tailwind CSS</td>
            <td>
                <ul>
                    <li><input type="checkbox">Utility Classes, Tailwind CSS Configuration</li>
                    <li><input type="checkbox">Responsive Classes, Media Queries</li>
                    <li><input type="checkbox">Customizing Tailwind CSS, Creating Custom Utility Classes</li>
                    <li><input type="checkbox">Tailwind CSS Plugins, Integration with Build Tools</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>



# Credits
- Planning Assistance  - **ChatGPT 3.5**