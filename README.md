# AngularApp
Skeleton for AngularJS Application with build configuration and test framework

This Application is configured with minimum plug-in that is required for development, build scripts are written for making a production build.

Note : Currently it is in development phase. Not all functionality works.

## Table of Contents
1. Tools Configured
2. Application Architecture
3. Initializing the Application
4. Node Scripts
5. Grunt Tasks and Configuration
6. Application Insider
7. References
8. About

### Tools Configured in the Application
* Grunt and Gulp - for Build Automation (either of Grunt/Gulp can be used. Both are provided as an option for use.)
* Jasmine - for writing unit test cases for controllers and services
* Karma - for Test runner
* Angular Material - for UI Designing
* Less and Sass - for CSS pre-processing (Both are provided as an option to choose.)

For more Details read below...

### Application Architecture
	AngularApp
		|__ client
		|		|__ app
		|				|__ assets
		|				|		|__ css
		|				|		|		|__ less
		|				|		|		|__ sass
		|				|		|__ img
		|				|		|__ js
		|				|__ components
		|				|		|__ directives
		|				|		|__ filters
		|				|__ main
		|				|__ partials
		|__ dist
		|__ grunt
		|		|__ config
		|		|__ tasks
		|__ gulp
		|		|__ tasks
		|__ test
		|		|__ app
		|				|__ main
		|				|__ partials
		|-- Gruntfile.js
		|-- bower.json
		|-- package.json
		|-- karma.conf.js
		|-- gulpfile.js	
		

### Initializing the Application
Run npm install from the root AngularApp folder.

	$ > npm install

This will automatically run bower install for you.

	$ > bower install

You can start the application by running http-server on client/app folder within AngularApp.

	$ > http-server -p <port number>

### Node Scripts

* "postinstall": "bower install"
* "prestart": "npm install"
* "start": "http-server -a localhost -p 8088 -c-1 ./app"
* "pretest": "npm install"
* "test": "karma start karma.conf.js"
* "test-single-run": "karma start karma.conf.js --single-run"
* "preupdate-webdriver": "npm install"
* "update-webdriver": "webdriver-manager update"
* "preprotractor": "npm run update-webdriver"
* "protractor": "protractor e2e-tests/protractor.conf.js"
* "update-index-async":

### Grunt Tasks and Configuration

#### Grunt Config


#### Grunt Tasks

### Gulp Tasks and Configuration

#### Gulp Config


#### Gulp Tasks

### Application Insider


### References


### About
