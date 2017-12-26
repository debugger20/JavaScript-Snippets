
///////////////////////////////////////////
///////////// TRANSPILATION  //////////////
///////////////////////////////////////////

// ES5:
// The old JavaScript version that is supported by all modern web browsers

// ES6:
// The new JavaScript version.

// caniuse.com
// a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.

// Babel
// A JavaScript package that transpiles JavaScript ES6+ code to ES5

// npm init
// Terminal command to create package.json

// package.json
// A file that contains information about a JavaScript object.

// npm install
// A command that installs Node packages.

// babel-cli
// A Node package that contains command line tools for Babel

// babel-preset-env
// A Node package that contains ES6+ to ES5 syntax mapping information.

// .babelrc
// A file specifies the version of the JavaScript source code.

// "build" script
// A package.json script that you use to transpile ES6+ code to ES5.

// npm run build
// A command that runs the build and transpiles ES6+ code to ES5.


// The list of steps needed to setup a project for transpilation:

// 1. Initialize the project using 'npm init'
npm init

// 2. Create a directory src and put ES6+ code into it.

// 3. Install babel dependencies running following:
npm install babel-cli -D
npm install babel-preset-env -D
// The -D flag instructs npm to add each package to a property called devDependencies in package.json
// Once the project's dependencies are listed in devDependencies, other developers can run your project without installing each package separately. 

// 4. Create a .babelrc file inside the project and add following code inside it:
{
  "presets": ["env"]
}
// ["env"] instructs Babel to transpile any code from versions ES6 and later

// 5. Add the following script to your scripts object in package.json:
"build": "babel src -d lib"
// babel — The Babel command call responsible for transpiling code.
// src   — Instructs Babel to transpile all JavaScript code inside the src directory.
// -d    — Instructs Babel to write the transpiled code to a directory.
// lib   — Babel writes the transpiled code to a directory called lib


// 6. Run 'npm run build' whenever you want to transpile your code from src to lib directories
npm run build


// The inside of package.json will look like:
{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "Mert Duatepe",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.6.1"
  }
}