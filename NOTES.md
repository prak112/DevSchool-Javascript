# Concepts Learned
- [Setup in Local Environment](#setup-in-local-development-environment)


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
    - [ ] Check for security vulnerabilities with outdated packages, `npm audit`
        - Always worth considering the risks, if updating packages introduces *breaking change*
        - *Learn and Experiment* - create a new branch to handle the package updates, `git branch -b update-dependencies`
    - [ ] Run local server, `npm start`
