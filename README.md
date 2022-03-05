# AGC Public Garden Web Page Mockup

This repository contains code to generate an example Public Garden web page using React and Bootstrap. 

## Installation

Please check that you are using Node 16 with `node -v`:

```
$ node -v             
v16.14.0
```

Now clone the repository, and then install the system using `npm install`:

```
$ npm install       

up to date, audited 1487 packages in 3s

175 packages are looking for funding
  run `npm fund` for details

6 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

Note: Yes, there are some security vulnerabilities, but they won't be a problem for this app, and attempting to fix them created a world of incompatibilties for me. I suggest we just leave them be for now.

## Run the system locally

To run the system locally, invoke `npm start`:

```
$ npm start

Compiled successfully!

You can now view public-garden-45ght3cf in the browser.

  Local:            http://localhost:3000/public-garden-45ght3cf
  On Your Network:  http://10.0.1.68:3000/public-garden-45ght3cf

Note that the development build is not optimized.
To create a production build, use npm run build.

asset static/js/bundle.js 2.54 MiB [emitted] (name: main) 1 related asset
asset index.html 1.81 KiB [emitted]
asset asset-manifest.json 259 bytes [emitted]
runtime modules 28.2 KiB 13 modules
modules by path ./node_modules/ 2.28 MiB 210 modules
asset modules 4.4 KiB
  data:image/svg+xml,%3csvg xmlns=%27.. 281 bytes [built] [code generated]
  data:image/svg+xml,%3csvg xmlns=%27.. 279 bytes [built] [code generated]
  data:image/svg+xml,%3csvg xmlns=%27.. 161 bytes [built] [code generated]
  data:image/svg+xml,%3csvg xmlns=%27.. 271 bytes [built] [code generated]
  data:image/svg+xml,%3csvg xmlns=%27.. 181 bytes [built] [code generated]
  + 11 modules
modules by path ./src/*.js 11.3 KiB
  ./src/index.js 1.48 KiB [built] [code generated]
  ./src/App.js 1.91 KiB [built] [code generated]
  ./src/Top.js 3.94 KiB [built] [code generated]
  ./src/Bottom.js 2.79 KiB [built] [code generated]
  ./src/Constants.js 1.13 KiB [built] [code generated]
webpack 5.69.1 compiled successfully in 2086 ms
```

## Deploying your changes

This repository contains a GitHub action to automatically build and deploy the page whenever a push is made to the `main` branch.  

So, to deploy the system, simply commit (or merge changes from a development branch) into your local main branch, and then push to GitHub. This will start a GitHub Action to build and deploy the system. 

You can watch the progress of the automated build and deploy [here](https://github.com/agilegardenclub/public-garden-45ght3cf/actions).

Note that the build will fail if there are any ESLint errors. See below for instructions on how to run ESLint.

The most recent successfully deployed version of the page is always available at [https://agilegardenclub.com/public-garden-45ght3cf/](https://agilegardenclub.com/public-garden-45ght3cf/)

## Development tips

### Suggested workflow

If you are making significant changes, please consider the following workflow:

  1. Create an issue to document your intended change.
  2. Create a branch off main called issue-NNN, where NNN is the issue number.
  3. Do all work in your development branch, updating from main as needed.
  4. When the change is complete, merge the branch into main, and close the issue.
  5. Push the main branch to GitHub. This will kick off a build and deploy the change to the published version of the page. 

This approach avoids committing and publishing broken versions of the page. 

### Custom theme

This repo is set up to implement a custom bootstrap theme, using the approach in [https://github.com/twbs/bootstrap-npm-starter/](https://github.com/twbs/bootstrap-npm-starter/).  Briefly, 

* The file scss/theme.scss defines the custom theme. You modify this file to change theme colors and/or global style definitions. 

* Each time you invoke `npm start` (or `npm build`), this file is compiled into a new bootstrap css file, which is located in src/css/theme.css. Then the system is started normally. This means that you will always see the latest version of the theme whenever you run or deploy the system.  This delays startup by a couple of seconds but guarantees you'll see any theme changes. 

* For more information on how to customize the Bootstrap theme, see [https://getbootstrap.com/docs/5.1/customize/sass/](https://getbootstrap.com/docs/5.1/customize/sass/). 

### ESLint

We use ESLint to enforce coding standards.  If you are using IntelliJ, this should be enabled automatically. You can run ESLint from the command line with `npm run lint`:

```
$ npm run lint   

> public-garden-45ght3cf@1.0.0 lint
> eslint --quiet --ext .js ./src
```
