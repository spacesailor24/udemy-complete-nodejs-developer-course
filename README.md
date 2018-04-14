# The Complete Node.js Developer Course (2nd Edition)

[**Udemy Course Link**](https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content) - https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content

[**Node.js Website**](https://nodejs.org/en/) - https://nodejs.org/en/

[**Webstorm IDE**](https://www.jetbrains.com/webstorm/?fromMenu) - https://www.jetbrains.com/webstorm/?fromMenu

[**nodemon**](https://www.npmjs.com/package/nodemon) - https://www.npmjs.com/package/nodemon - nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.

[**yargs**](https://www.npmjs.com/package/yargs) - https://www.npmjs.com/package/yargs - Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

## Table of Contents

Lecture Topic | Link
--- | ---
General Commands | [General Commands](#general-commands)
General Notes | [General Notes](#general-notes)
**Useful Codes** | [Useful Codes](#userful-codes)
Writing to a file | [Writing to a file](#writing-to-a-file)
**SECTION 2** | [**Section 2**](#section-2)
What is Node? | [Lecture 4](#section-2-lecture-4)
Why Should I Use Node? | [Lecture 5](#section-2-lecture-5)
Hello World | [Lecture 7](#section-2-lecture-7)
**SECTION 3** | [**Section 3**](#section-3)
Using Require | [Lecture 9](#section-3-lecture-9)
Getting Input From User | [Lecture 13](#section-3-lecture-13)

## General Commands

- `node -v` will print the currently installed **version** of **Node.js**
- `global` will list all the available **global variables**
- `process` will list information about the **Node process** that is being executed
- `npm init` will initialize a **npm package** in your current **Directory**
- `npm install <package_name> --save` will install a **Node package** and save it as a **Dependency** in the project's **package.json**
- `npm install <package_name> -g` will install a **Node package** globally. This will **NOT** add the package to your project's **package.json**, but will instead install the package to your system to be used via command line
- `process.argv` gives you access to the **Arguments Array**

## General Notes

- **I/O** stands for Input/Output: computers are based on the fundamental idea that every input results in an output
- [**Pre-packaged Node packages**](https://nodejs.org/api) - https://nodejs.org/api/

## Useful Codes

### Exporting methods from Node module

```javascript
module.exports.myMethod = () => {};

// OR

const myMethod = () => {};

module.exports = {
    myMethod,
};
```

### Writing to a file

```javascript
const fs = require('fs'); // pulls in the File System Node module

var filename = 'greetings.txt';
var text = `Hello World!`;

fs.appendFile(filename, text, function (err) {
    if (err) throw err;
});
```

<!-- ################################################################################################################ -->
<!--                                                     SECTION 2                                                    -->
<!-- ################################################################################################################ -->

## SECTION 2

### Section 2 Lecture 4

#### What is Node

- **Node.js** and **JavaScript** run on the **V8 Open Source Engine** which takes the **JavaScript** code and compiles it down to **machine code**

- **V8 Engine** is built in **C++**

### Section 2 Lecture 5

#### Why Should I User Node

#### Blocking I/O

- **Blocking** a.k.a. **synchronous programming**, halts the program's execution while retrieving output for input.
- Synchronous calls **must** return output from processed input, **before** further execution of the program can take place.
- **Blocking** gets its name, because it **blocks** all other input from being processed while processing a single input.

#### Non-Blocking I/O

- **Non-Blocking** a.k.a. **asynchronous programming**, allows for the program to **continue** execution while retrieving output for input.
- **Asynchronous calls** return a promise that will **later return the output when the processing of the input is complete**. This allows for multiple Asynchronous calls to take place at once, without having to wait for the return of any one asynchronous call.
- **Non-Blocking** gets its name, because it **does not block** other input from being processed while any particular input is awating output.

![Blocking v.s. Non-Blocking I/O](img/blocking_vs_non_blocking_io.png?raw=true "Blocking v.s. Non-Blocking I/O")

### Section 2 Lecture 7

#### Hello World

- In a file located in **Directory** `hello_world/`, create file `app.js` with contents:

```javascript
console.log('Hello World'!);
```

- To run `app.js` type into the terminal: `node hello_world/app.js`

<!-- ################################################################################################################ -->
<!--                                                     SECTION 3                                                    -->
<!-- ################################################################################################################ -->

## SECTION 3

### Section 3 Lecture 9

#### Using Require

- Use the `require()` method to utilize **Node Modules** within a file:

```javascript
console.log('Starting app...');

const fs = require('fs'); // pulls in the File System Node module
const os = require('os'); // pulls in the OS Node module

var filename = 'greetings.txt';
var user = os.userInfo();
var greeting = `Hello World! Welcome to ${user.username}\'s terminal!\n`;

fs.appendFile(filename, greeting, function (err) {
    if (err) throw err;
});
```

### Section 3 Lecture 13

#### Getting Input From User

- A user can pass in arguments to a program when executing it via command line like so:

Termianl input:

```terminal
node app.js myArgument
```

this will allow the program to utilize and response to the argument by doing something like so:

app.js:

```javascript
let userArgumentOne = process.argv[2];
```

### Section 3 Lecture 14

#### Simplified Input With Yargs

- Utilize yargs, we can respond to key-valued-paired arguments more easily:

Termianl input:

```terminal
node app.js myArgument --myArgumentKey=myArgumentValue
```

app.js:

```javascript
const yargs = require('yargs');

const argv = yargs.argv;

console.log(argv.myArgumentKey);
```