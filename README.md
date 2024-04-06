# Agenda
 - Learn Fundamentals of JavaScript, React JS, Redux, React Native
 - Learn Advanced concepts in JavaScript
 - Implement [Course Project](#course-project---tbd)
 - Check [Learning Plan](#learning-plan) for details

# Resources
- [CS50 Web Programming (CS50 W)](https://youtube.com/playlist?list=PLhQjrBD2T380xvFSUmToMMzERZ3qB5Ueu&si=fESzUI9mLIPKQBlQ) - YouTube playlist
- [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) - Learning through building projects

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Documentation reference and Guidebook

<br>

# Progress
- See [Notes](NOTES.md)

## JavaScript Fundamentals practice 
- **freeCodeCamp (fCC)** - Text-based Role Playing Game
    - [Source code](https://github.com/prak112/DevSchool-JavaScript/tree/text-rpg)
    - [Gameplay](https://prak112.github.io/DevSchool-JavaScript/)
- **CS50 W** 
    - [Implementation of concepts](https://github.com/prak112/cs50-webdev/tree/main/javascript) - based on [Lecture 5](https://youtu.be/x5trGVMKTdY?si=MYl_hguORRbdarCO)
- **Practice Exercises** 
    - [Algorithms practice](https://github.com/prak112/DevSchool-Javascript/tree/practice-problems/algorithms_practice) - based on [Top 10 Algorithms by fCC](https://youtu.be/ufBbWIyKY2E?si=UquSOoJ9zXHaU4Br)
    - Clearing confusions - [`for...in` Vs `for...of`](https://github.com/prak112/DevSchool-Javascript/tree/practice-problems/for-in_V_for-of) 

## JavaScript Libraries/Frameworks practice
- ReactJS 
    - [mini-project](https://github.com/prak112/DevSchool-Javascript/tree/react-js) - based on [React Documentation](https://react.dev/learn)
- Bootstrap
    - [Quick learning](https://github.com/prak112/DevSchool-Javascript/tree/bootstrap-parcel) - based on [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/layout/breakpoints/)

<br>

# Current Focus
```mermaid
graph TD
A[FUNDAMENTALS] -->Conditionals & Loops & Arrays & Objects & DocumentObjectModel


B[ADVANCED CONCEPTS] --> Closures & Hoisting & AsynchronousProgramming
```

<!-- ADD Git Branches to show PROGRESS!!-->



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
- [ ] Basic knowledge in ReactJS, Redux
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
        <td>HTML5, TailwindCSS, JavaScript</td>
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


## JavaScript Fundamentals
- [X] Variables, Data Types, Operators, Control Structures (if/else, switch, loops)
- [X] Function Declarations, Function Expressions, Arrow Functions, Parameters, Return Values
- [X] Creating Arrays, Accessing Array Elements, Array Methods (map, filter, reduce), Spread/Rest Operators
- [ ] Creating Objects, Accessing Object Properties, Object Methods, Object Destructuring
- [X] Global Scope, Local Scope, Block Scope, Hoisting, Lexical Scope
- [X] Closure Concept, Scope Chain, Practical Use Cases
- [X] Promises, Async/Await, Fetch API, Handling Asynchronous Operations
- [X] Understanding DOM, Selecting DOM Elements, Manipulating DOM Elements, Event Handling


## React Basics
- [X] JSX syntax
- [X] Creating Components, Rendering Components, Props
- [X] State, setState, 
- [ ] Class Components vs Functional Components
- [ ] componentDidMount, componentDidUpdate, componentWillUnmount
- [ ] Handling Events, Synthetic Events in React
- [X] Conditional Rendering using if statements and ternary operators
- [X] Rendering Lists, Keys in React

## ES6 Features, Functional Programming
- [X] Arrow Functions Syntax, Lexical `this`
- [ ] Object Destructuring, Array Destructuring
- [ ] Spread Syntax, Rest Parameters
- [ ] Class Syntax, Constructors, Class Inheritance
- [ ] Exporting and Importing Modules, Default and Named Exports
- [ ] Functions as First-Class Citizens, Function Composition
- [X] Immutable Data Structures, Benefits of Immutability

# JavaScript Prototypes
- [ ] Basics
- [ ] Instances, Inheritance, Encapsulation
- [ ] Classes
- [ ] JSON

## Asynchronous JavaScript
- [X] Creating Promises, Chaining Promises, Error Handling
- [X] Async/Await Syntax, Handling Errors, Async Function Expressions
- [ ] Making HTTP Requests, Handling Responses, Error Handling
- [ ] Parallel and Sequential Execution, Promise.all, Promise.race

## Redux
- [ ] Store Creation, Store Methods, getState, dispatch, subscribe
- [ ] Action Types, Action Creators, Payload
- [ ] Reducer Functions, Pure Functions, Handling State Updates
- [ ] Thunk, Saga, Logger Middleware
- [ ] Immutability, Immutable.js Library (optional)

## Tailwind CSS	
- [ ] Utility Classes, Tailwind CSS Configuration
- [ ] Responsive Classes, Media Queries
- [ ] Customizing Tailwind CSS, Creating Custom Utility Classes
- [ ] Tailwind CSS Plugins, Integration with Build Tools



<br>
<hr><hr>


# Credits
- Planning Assistance  - **ChatGPT 3.5**
- Learning Assistance :
    - [![built with Codeium](https://codeium.com/badges/main)](https://codeium.com)
    - **Github CoPilot**
