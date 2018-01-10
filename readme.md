# Angular 2 Katas

Small, independent Angular 2 projects with one or a few distinct features.  By concentrating on small amounts of code it makes it a little easier to comprehend how it works.

All projects were generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5 and are generated to run on nodejs.

## Build

The node_modules folder was not uploaded so in order to build they need to be installed using npm install

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.  

To deploy to IIS using ng build --deploy-url /IIS_Application_Name

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Other run options are npm start (same as npm run prod), ng serve, ng serve --e dev.

If you are struggling to find a free port you can add this to automatically choose the port: --port=0 

To run on node:
•	npm install http-server -g 
•	http-server ./dist

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).