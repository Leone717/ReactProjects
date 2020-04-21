# Install React

## React + Node + NPM

https://hu.reactjs.org/docs/hooks-intro.html

- Setup Node: https://nodejs.org/en/ and test in **cmd**:

**Node** version:
```
C:\Users\Mike>node -v
v12.16.2
```

**NPM** version:
```
C:\Users\Mike>npm -v
6.14.4
```
- **open Node**:

```
C:\Users\Mike>node

Welcome to Node.js v12.16.2.
Type ".help" for more information.
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the repl
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file
```

- we select the map, wehere **setup React**:

```
npm i -g create-react-app
C:\Users\Mike>create-react-app testreact

Success! Created testreact at C:\Users\Mike\testreact
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd testreact
  npm start

Happy hacking!

```
- **start react**:

```
C:\Users\Mike>cd testreact
C:\Users\Mike\testreact>npm start
```
- open browser on: http://localhost:3000/
- you will see the basics application
- **donwload Visual Studio Code,open folder, testreact**  
- in the Visual Studio you can check main part of the App and edit files
- stop: **ctrl+c 2 times**
