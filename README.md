# JavaScript unit tests with Jasmine and Karma

How to install jasmine and karma to be able to run unit tests and they are developed.
Also how to trigger unit tests from the command line.

https://docs.microsoft.com/en-us/visualstudio/cross-platform/tools-for-cordova/debug-test/basic-tests-with-jasmine


## Github Repo  

git remote add origin https://github.com/fredericaltorres/FuncsJS.git
git push -u origin master

## Installation

Jasmine and Karma installation

    npm install --save-dev jasmine
    npm install --save-dev karma
    npm install --save-dev karma-jasmine karma-chrome-launcher

Installs Karma dependencies; replace <browser> with whatever you have installed, e.g. chrome, firefox, or ie.

Install ESLint https://eslint.org/docs/user-guide/getting-started

    npm install eslint --save-dev    

## For developement
    node_modules\.bin\karma start
    node_modules\.bin\karma start --reporters html

## For Build System

    node_modules\.bin\karma start --single-run

To produce ESLint json config file
    node_modules\.bin/eslint --init

To lint a file

node_modules\.bin\eslint yourfile.js

# How to add new JavaScript file via bundle

## Bundle definition
    C:\projects.net\emoney\advisor-site\ema\scripts.bundle.json

## Reference in C#

    C:\projects.net\emoney\advisor-site\ema\emx\ClientFacts\Main.cs
    Bundles.Reference("emx/ClientFacts");

```js
{
    "_Comment": "Mixpanel logging classes",
    "name": "~/emx/MixPanelLoggingClasses",
    "path": "emx-MixPanelLoggingClasses.js",
    "minify": false,
    "files": [
        "emx/ClientFacts/MixPanelBasicFactLogger.js",
    ],
    "dependencies": [
    ]
}
```

## How to transpile your bundle from ES5 to ES6

### via .jsx
    Change the extension of your file to jsx

### using a js file
Add property to bundle
 * "webpack": true,

### Why transpiling
Pro:
    * ESLint is applied
        See web site esling.org to learn how to skip some rule
        https://eslint.org/docs/rules/no-unused-vars
    * You can use ES6 feature
Cons:
    * May be more difficult to debug, because you have to debug to code transpiled.
    
### Temporary bundle scripts:
The bundle script are located in folder
    C:\projects.net\emoney\advisor-site\ema\wwwroot\scripts
in case of change, I had to delete the bundle js file to be updated

