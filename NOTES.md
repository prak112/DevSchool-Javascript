# Concepts Learned
- [Setup in Local Environment](#setup-in-local-development-environment)
- [*Components*](#components)
- [*Props*](#props)
- [*State*](#state)

- [ERROR LOGS](#error-logs)

# Setup in Local Development Environment
- Follow the checklist (refined for local env setup):
    - [X] Install Node.js
    - <s>[ ] Download **Code Sandbox** files</s> ---> Failed, empty folder downloads
    - [X] Create project files manually
    - <s>[ ] Unzip files archive, move to local project directory</s> ---> since **Code Sandbox** download failed
    - [X] Install dependencies, `npm install`
        - Files/Directories created after installation : 
            - `node_modules` directory - includes all needed packages for the project (assuming trust in *react.dev*)
            - `package-lock.json` file - includes description of all created packages under `packages` key
    - [X] Add `node_modules` directory created after `npm install` to `.gitignore`
    - [X] Check for security vulnerabilities with outdated packages, `npm audit`
        - Always worth considering the risks, if updating packages introduces *breaking change*
    - [X] *Learn and Experiment* - create a new branch to handle the package updates, `git branch -b update-dependencies`
    - [X] Run local server, `npm start` - runs the server in default browser 

<br>

# Components
- A React *Component* is a reusable code snippet in JSX syntax (JavaScript code and HTML tags) representing an UI element that can be used multiple times to represent similar UI elements in an application
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
- Passing values from a parent *Components* to child *Components* is made possible through *Props*
- According to JSX syntax to swap to Javascript we use `{}`for this process as follows :
    ```jsx
    function ChildComponent({label}) {
        return <button>{label}</button>; 
    }

    export default function ParentComponent() {
        return (
            <>
                <div>
                    <ChildComponent value="That's" />
                    <ChildComponent value="how" />
                    <ChildComponent value="values" />
                    <ChildComponent value="Prop!" />
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
        const [label, setValue] = useState(null);

        function onClickEvent() {
            setValue('Clicked');    /* updates 'value', 'setValue' remains null*/
        }

        return (
            <>
            <button 
                onClick={onClickEvent}
            >
                {label}
            </button>
            </>
        ); 
    }


    export default function ParentComponent() {
        return (
            <>
                <div>
                    <ChildComponent value="That's" />
                    <ChildComponent value="how" />
                    <ChildComponent value="values" />
                    <ChildComponent value="Prop!" />
                </div>
            </>
        );
    }
   ```


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

- **CONSEQUENCE**
    - Server disconnected.

- **SOLUTION**
    - Install NVM (Node Version Manager) on `bash` using `curl` or `wget` command from [this GitHub repo](https://github.com/nvm-sh/nvm#installing-and-updating) 
        - This command activates a script that installs NVM on your system
        - For system-wide accessibility, it adds environment PATH variable to the `.bash_profile`
    - If you do not have a `.bash_profile` (like Me), create by :
        - open a new `bash` terminal
        - create a file, `touch ~/.bashrc`
        - run the `curl` or `wget` command again
    - Restart terminal and check for `nvm -v` in `bash` terminal
    - Downgrade `Node.js` version using `nvm` to 14
    - Server online and compilation success!


<br>

[Back To Contents](#concepts-learned)
<hr>