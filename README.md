# Table of Contents
- [Agenda](#agenda)
- [Resources](#resources)
- [Progress](#progress)
    - [Fundamentals practice](#fundamentals-practice)
    - [Libraries/Frameworks practice](#librariesframeworks-practice)
    - [Practice Project](#practice-project)
- [Current Focus](#current-focus)
- [Future Focus](#future-focus)
- [Course Project - TBD](#course-project---tbd)
    - [Technology Requirements](#technology-requirements)
    - [Overview](#overview)
- [Learning Plan](#learning-plan)
- [Credits](#credits)

<br>
<hr><hr>

# Agenda
 - Learn Fundamentals of JavaScript, React JS, Redux, React Native
 - Learn Advanced concepts in JavaScript
 - Implement [Course Project](#course-project---tbd)
 - Check [Learning Plan](#learning-plan) for details

## Resources
- [CS50 Web Programming (CS50 W)](https://youtube.com/playlist?list=PLhQjrBD2T380xvFSUmToMMzERZ3qB5Ueu&si=fESzUI9mLIPKQBlQ) - YouTube playlist
- [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) - Learning through building projects

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [W3Schools](https://www.w3schools.com/js/default.asp) - Documentation reference and Guidebook

<br>
<hr>

# Progress
- See [Notes](NOTES.md)

## Fundamentals 
- **freeCodeCamp (fCC)** - Text-based Role Playing Game
    - [Source code](https://github.com/prak112/DevSchool-JavaScript/tree/text-rpg)
    - [Gameplay](https://prak112.github.io/DevSchool-JavaScript/)
- **CS50 W** 
    - [Implementation of concepts](https://github.com/prak112/cs50-webdev/tree/main/javascript) - based on [Lecture 5](https://youtu.be/x5trGVMKTdY?si=MYl_hguORRbdarCO)
- **Practice Exercises** 
    - [Algorithms practice](https://github.com/prak112/DevSchool-Javascript/tree/practice-problems/algorithms_practice) - based on [Top 10 Algorithms by fCC](https://youtu.be/ufBbWIyKY2E?si=UquSOoJ9zXHaU4Br)
    - Clearing confusions - [`for...in` Vs `for...of`](https://github.com/prak112/DevSchool-Javascript/tree/practice-problems/for-in_V_for-of) 

## Libraries/Frameworks
- ReactJS 
    - [Tutorial project, Fundamentals practice](https://github.com/prak112/DevSchool-Javascript/tree/react-js) - based on [React Documentation](https://react.dev/learn)
- Bootstrap
    - [Quick learning](https://github.com/prak112/DevSchool-Javascript/tree/bootstrap-parcel) - based on [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/layout/breakpoints/)
<br>

## Practice Project
- [PokeDex](https://github.com/prak112/DevSchool-Javascript/tree/pokedex)
with basic functionality to understand :
    - JSON, 
    - API-Client interaction, 
    - Asynchronous JavaScript
    - Bootstrap 

<br>

[Back To Progress](#progress)
<br>
<hr>
<hr>

# Focus Areas
## Learning
```mermaid
graph TD
A[FUNDAMENTALS] -->Conditionals & Loops & Arrays & Objects & DocumentObjectModel

B[ADVANCED CONCEPTS] --> Closures & Hoisting & AsynchronousJavaScript 
```
<br>

## Project
```mermaid
graph TD
C[FRAMEWORKS] --Components, States-->D[React]
C --State Management-->E[Redux]
C --Mobile Development-->F[ReactNative]
G[COURSE PROJECT] --> TBD
```
- Learning *React JS* & *Redux* fundamentals would provide advantage in smooothening the learning curve with *React Native*

 - Check [Learning Plan](#learning-plan) for details


<br>
<hr>

# Course Project - TBD
- To decide between the following :
    1. <details>
        <summary><b>Furniture Ecommerce website</b></summary>
        <p>
            Basic : multiple products across multiple pages, a search feature, cart icon to add items to cart and on a separate page it stores that item and a checkout process.
        </p>
        <p>
            Advanced : Inventory Tracker. If only backend focused? Then create the inventory system for the store without the frontend. 
        </p>
        <p>
            Bonus : Inventory alert ONLY for smaller items BUT NOT for bigger items.
        </p>
       </details>
    2. <details>
        <summary><b>Restaurant website</b></summary>
        <p>
            Basic : Reservation system to book/reserve tables
        </p>
        <p>
            Advanced : Showcase value of business and stores info
        </p>
        <p>
            Bonus : Send email confirmation of reservation
        </p>
       </details>
    3. <details>
        <summary><b>Booking app for a service</b></summary>
        <p>
            Basic : Example, Mechanic shop with appointments for car repairs.
        </p>
        <p>
            Bonus : Track Financial inflow-outlfow, and visualize
        </p>
       </details>
    4. <details>
        <summary><b>Challenger - Bug Tracker</b></summary>
        <p>
            <ul> 
                <li>Show different stages of a Bug, tracking it along the process</li>
                <li>For example, display Bug going from 'backlog' to 'progress' to 'code review' to 'done'</li>
            </ul>
        </p>
       </details>

## Technology Requirements
- Requirements listed from discussions with :
    -   Teacher (Teemu Turunen), 
    -   [Bing AI](https://sl.bing.net/dEhXls9KsqO), 
    -   [Geek4Geeks](https://www.geeksforgeeks.org/introduction-react-native/?ref=lbp)
- MERN stack with Redux and ReactNative for Mobile App

## Overview
- The mobile application will be a **Hybrid Application** with the following specifications 

<table style="border: 1px solid; border-collapse: collapse;">
    <tr>
        <th>Hosting Platforms</th>
        <td>iOS, Android</td>
    </tr>
    <tr>
        <th>Frontend</th>
        <td>HTML5, Bootstrap5, JavaScript</td>
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
<hr>

# Learning Plan
- Currently [unraveling MERN stack](https://github.com/prak112/fullstack-open-core) with FullStack open course from University of Helsinki
- Learnings from FullStack open will be implemented for Course Projects (*15osp*, *45osp*)
- Below is an exhaustive list of current learnings and their progress ( [progress details](/NOTES.md) )

## JavaScript Fundamentals
- [X] Variables, Data Types, Operators, Control Structures (if/else, switch, loops)
- [X] Function Declarations, Function Expressions, Arrow Functions, Parameters, Return Values
- [X] Creating Arrays, Accessing Array Elements, Array Methods (map, filter, reduce), Spread/Rest Operators
- [X] Creating Objects, Accessing Object Properties, Object Methods, Object Destructuring
- [X] Global Scope, Local Scope, Block Scope, Hoisting, Lexical Scope
- [X] Closure Concept, Scope Chain, Practical Use Cases
- [X] Promises, Async/Await, Fetch API, Handling Asynchronous Operations
- [X] Understanding DOM, Selecting DOM Elements, Manipulating DOM Elements, Event Handling


## React Basics
- [X] JSX syntax
- [X] Creating Components, Rendering Components, Props
- [X] State, setState, 
- [X] Class Components vs Functional Components
- [ ] componentDidMount, componentDidUpdate, componentWillUnmount
- [X] Handling Events, Synthetic Events in React
- [X] Conditional Rendering using if statements and ternary operators
- [X] Rendering Lists, Keys in React

## ES6 Features, Functional Programming
- [X] Arrow Functions Syntax, Lexical `this`
- [X] Object Destructuring, Array Destructuring
- [X] Spread Syntax, Rest Parameters
- [X] Class Syntax, Constructors, Class Inheritance
- [X] Exporting and Importing Modules, Default and Named Exports
- [X] Function Composition
- [X] Immutable Data Structures, Benefits of Immutability

# JavaScript Objects
- [X] Basics
- [X] Prototypes
- [X] Prototypal 'Inheritance' (Delegation)
- [X] Classes
- [X] Instances, Inheritance, Encapsulation
- [X] Prototype vs Class
- [X] JSON

## Asynchronous JavaScript
- [X] Creating Promises, Chaining Promises, Error Handling
- [X] Async/Await Syntax, Handling Errors, Async Function Expressions
- [X] Making HTTP Requests, Handling Responses, Error Handling
- [ ] Parallel and Sequential Execution, Promise.all, Promise.race

## Redux
- [ ] Store Creation, Store Methods, getState, dispatch, subscribe
- [ ] Action Types, Action Creators, Payload
- [ ] Reducer Functions, Pure Functions, Handling State Updates
- [ ] Thunk, Saga, Logger Middleware
- [ ] Immutability, Immutable.js Library (optional)

## Bootstrap 
(check [detailed plan](https://github.com/prak112/DevSchool-Javascript/tree/bootstrap-parcel?tab=readme-ov-file#learning-checklist) )	
- [X] Grid System
- [ ] Components
- [ ] Utilities

<br>

[Back To Progress](#progress)
<br>
<hr>
<hr>

# Credits
- Planning Assistance  - **ChatGPT 3.5**
- Learning Assistance :
    - [![built with Codeium](https://codeium.com/badges/main)](https://codeium.com)
    - **GitHub CoPilot**
<hr>
<hr>