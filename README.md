# JavaScript unit tests with Jasmine and Karma

- How to install jasmine and karma to be able to run unit tests as they are developed.
- How to trigger unit tests from the command line.
- How to execute ESLint on a file

https://docs.microsoft.com/en-us/visualstudio/cross-platform/tools-for-cordova/debug-test/basic-tests-with-jasmine

## Github Repo  

git remote add origin https://github.com/fredericaltorres/FuncsJS.git
git remote -v
git push -u origin master

## Jasmine and Karma installation

```js
    npm install // Install all the packages
    
    npm install --save-dev jasmine
    npm install --save-dev karma
    npm install --save-dev karma-jasmine karma-chrome-launcher
```    

Installs Karma dependencies; replace <browser> with whatever you have installed, e.g. chrome, firefox, or ie.

# ESLint Installation

Install ESLint https://eslint.org/docs/user-guide/getting-started

    npm install eslint --save-dev

## For developement

    node_modules\.bin\karma start

## For Build System

    node_modules\.bin\karma start --single-run

# To produce ESLint json config file

    node_modules\.bin/eslint --init

# To lint a file

    node_modules\.bin\eslint yourfile.js
