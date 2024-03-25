# Concepts Learned
- [Setup in Local Environment](#setup-in-local-development-environment)
- [Core Principles](#core-principles)
- [*Components*](#components)
- [*Props*](#props)
- [*State*](#state)

- [ERROR LOGS](#error-logs)

<br>
<hr>

# Setup in Local Development Environment
- Follow the checklist (refined for local env setup):
    - [X] Install Node.js
    - <s> Download **Code Sandbox** files</s> ---> Failed, empty folder downloads
    - [X] Create project files manually
    - <s> Unzip files archive, move to local project directory</s> ---> since **Code Sandbox** download failed
    - [X] Install dependencies, `npm install`
        - Files/Directories created after installation : 
            - `node_modules` directory - includes all needed packages for the project 
            - `package-lock.json` file - includes description of all created packages under `packages` key
    - [X] Add `node_modules` directory created after `npm install` to `.gitignore`
    - [X] Check for security vulnerabilities with outdated packages, `npm audit`
        - Always worth considering the risks, if updating packages introduces *breaking change*
    - [X] *Learn and Experiment* - create a new branch to handle the package updates, `git branch -b update-dependencies`
    - [X] Run local server, `npm start` - runs the server in default browser 

<br>

# Core Principles
1. ***Component*-Based Architecture** - Concept of building UI using reusable Javascript and XML (JSX) elements

2. **Declarative Programming** - Concept of declaring the desired end state to React results in it updating the DOM to match the declared end state.

3. **Immutability** - Concept of updating the current *State* of a *Component* using the React Hook, `useState`'s setter function to prevent failure in re-rendering *Components* upon updating *State*
    - Benefits of managing *State* through `useState` setter function :
        - *Predictability* --> automatic re-rendering guaranteed
        - *Performance* --> automated comparison of old and new *State* for re-rendering 
        - *Concurrency* --> prevents bugs with asynchronous programming
        - *Debugging* --> to track changes in *State* using Redux (State Management Tool) 

4. **Unidirectional Data Flow (One-Way Data Binding)** - Data flows downwards from `ParentComponent` to `ChildComponent`s  through *Props*

5. **[States](#state) & [Props](#props)**

6. **JSX (Javascript XML)** - React's templating syntax for rendering *Component*s using HTML tags and Javscript

<hr>
<em>...TO BE Explored and Understood...</em>

7. **Virtual DOM**

8. **Lifecycle Methods**

9. **Hooks**

[Back To Contents](#concepts-learned)
<br><br>
<hr>

# Components
- *Component* is a reusable code snippet in JSX syntax (JavaScript code and HTML tags) representing an UI element that can be used multiple times to represent similar UI elements in an application
- *Components* are defined as Javascript functions, BUT starts with a capital, else it won't work. For instance: 
    ```jsx
    export default function StartsWithCapital() {
        ...
    }
    ```
- *Components* return the UI element using JSX syntax
    ```jsx
        export default function StartsWithCapital() {
            return (
                <div>
                    <p>Image title</p>
                    <img src="image-url" alt="alternate image description"/>
                </div>
            )
    }
    ```
- **PITFALL !** For the *Component* to represent an element with multiple elements in `return`, the JSX markup must be wrapped inside parantheses `()` and JSX tags `<>, </>`, if any.
- *Components* can be used within *components*, where the outer *component* can be termed as a "parent", and the inner *component* as a "child"
- **PITFALL !** *Components* must never be nested, should only be defined at the top level.


[Back To Contents](#concepts-learned)
<br>

# Props
- Passing values from a `ParentComponent` to `ChildComponent` is made possible through *Props*
- According to JSX syntax to swap to Javascript we use `{}`for this process as follows :
    ```jsx
    function ChildComponent({ value }) {
        return <button>{ value }</button>; 
    }

    export default function ParentComponent() {
        return (
            <>
                <div>
                    <ChildComponent value={This} />
                    <ChildComponent value={is} />
                    <ChildComponent value={Prop} />
                </div>
            </>
        );
    }
    ```
[Back To Contents](#concepts-learned)
<br>


# State
- Components use *State* to 'remember' the status of events/variables inside a *Component*
- Using a React hook called `useState` and its function `setValue`, the process of 'remembering' is initialised :
   - *Prop* values used in the `ParentComponent` are removed
   - *Prop* value passed into `ChildComponent` is removed
   - An array is used to setup initial *State* of the `ChildComponent`
   - Event handler uses `setValue` function to set the *State* of the `ChildComponent` when the Event occurs
   ```jsx
    import { useState } from "react";

    function ChildComponent() {
        const [currentState, setState] = useState(null);

        function onClickEvent() {
            setValue('Clicked');    /* updates 'value', 'setValue' remains null*/
        }

        return (
            <>
            <button 
                onClick={onClickEvent}
            >
                {currentState}
            </button>
            </>
        ); 
    }


    export default function ParentComponent() {
        return (
            <>
                <div>
                    <ChildComponent value={This} />
                    <ChildComponent value={is} />
                    <ChildComponent value={Prop} />
                </div>
            </>
        );
    }
   ```

## Lifting State Up to Parent Component
- Handling *States* of `ChildComponent`s inside a `ParentComponent` is ideal (based on best practices for refactoring).
- To communicate and handle *Props* and *States* between `ChildComponent`s inside a `ParentComponent`, a shared *State* variable is used.
- *State* variables are arrays which are initialised with current state of the *Component* and a setter function to update the *State* from the React Hook, `useState`
- *Props* are used to pass down the *State* from the `ParentComponent` to the `ChildComponent`s within 
```jsx
import React from "react";
import { useState } from "react";


function ChildComponent(value, onClickEvent) {
    return (
        <button onClick={onClickEvent}> {value} </button>
    );
}

export default function ParentComponent() {
    const [currentState, setState] = useState(Array(3).fill(null));

    function handleClickEvent(i) {
        const copyCurrentState = currentState.slice();
        copyCurrentState[i] = 'NewState';
        setState(copyCurrentState);
    }

    return (
        <>
            <div>
                <ChildComponent value={currentState[0]}, onClickEvent={() => handleClickEvent(0)} />
                <ChildComponent value={currentState[1]}, onClickEvent={() => handleClickEvent(1)} />
                <ChildComponent value={currentState[2]}, onClickEvent={() => handleClickEvent(2)} />
            </div>
        </>
    )
}
```

- When passing down *Props* alone are not enough to generate functionality, functions are used.
- However, calling a function which is defined inside the `ParentComponent` from a `ChildComponent` causes an infinite loop error.
- To prevent this issue we can use arrow functions (`() =>`) to enhance the *Props* functionality.
- Summary :
    - `ParentComponent` passes down *Props* to display the `ChildComponent`.
    - On triggering the `onClickEvent` in the `ChildComponent`, it asks `ParentComponent` to update its *State*.
    - `ParentComponent` uses the `currentState` via the JSX syntax and calls `handleClickEvent` with a variable as parameter using `() =>`
    - Upon successfully updating the *State* of the `ChildComponent`, the `ParentComponent` and all the `ChildComponent`s are automatically re-rendered.


[Back To Contents](#concepts-learned)
<br>




<br><br>
<hr><hr>

# ERROR LOGS
- Debugging assistants 
    - **GitHub CoPilot Chat**
    - **Codeuim Chat**

1. **ERROR**
    - `npm audit fix --force` is not recommended (for a good reason!)

- **CONSEQUENCE** :
    - *Breaking Change* (was WARNED already, but witnessed it.)
    - All packages were updated, `package-lock.json` and `package.json` were updated with updated versions of the packages
    - Vulnerabilities multiplied 10 fold !!

    - *ONE GOOD THING* : I committed my changes to `git` branch with previous package versions in `package-lock.json` and `package.json`
- **SOLUTION** :
    - `git checkout package.json package-lock.json` reverted the changes and returned to all my previous package version


2. **ERROR**
    - Executing `npm start` throws an Error :
    `error:0308010C:digital envelope routines::unsupported work`
    - Requires stable NodeJS version for `envelope routines`, which is version 14 or lesser

- **CONSEQUENCE**
    - Server disconnected.

- **SOLUTION**
    - Install NVM (Node Version Manager) on `bash` using `curl` or `wget` command from [this GitHub repo](https://github.com/nvm-sh/nvm#installing-and-updating) 
        - This command activates a script that installs NVM on your system
        - For system-wide accessibility, it adds environment PATH variable to the `.bash_profile`
    - If you do not have a `.bash_profile` (like Me), create as follows :
        - open a new terminal at the source `bash` application 
        - create a file, `touch ~/.bashrc`
        - run the `curl` or `wget` command again
    - Restart terminal and check for `nvm -v` in `bash` terminal
    - Downgrade `Node.js` version using `nvm` to 14
        ```bash
        nvm install 14 # if node version 14 is unavailable
        nvm use 14  
        npm start # for launching server
        ```
    - Server online and compilation success!


<br>

[Back To Contents](#concepts-learned)
<hr>