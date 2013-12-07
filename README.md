generator-angular-phonegap-seed
=====================
A [Yeoman](http://yeoman.io) generator for getting started with [PhoneGap](http://phonegap.com/) and [AngularJS](http://angularjs.org/) (with routing!). Takes you from zero to a barebones Angular app in seconds.


## Dependencies

This generator assumes you have a PhoneGap project ready to go. If not, [PhoneGap-CLI](https://github.com/phonegap/phonegap-cli) is a great place to start.

Projects are created using the latest version of the unstable branch from [Angular's nightly builds](http://ci.angularjs.org/job/angular.js-angular-master/lastSuccessfulBuild/artifact/build/).

## Usage

**Install the generator:**

```
$ npm install -g generator-angular-phonegap-seed
```
**Navigate to your PhoneGap project:**

```
$ cd myAwesomeMobileApp
```

**Initiate the generator:**

```
$ yo angular-phonegap-seed
```

## Directory structure:

*Note: On Angular 1.2, the routing service has been removed from core. It must be included explicitly.*

```
/www
    /css
        - index.css
    /img
        - logo.png
    /js
        - app.js
        - controllers.js
        - index.js
        - services.js
    /lib
        - angular.js
        - angular-route.js
    /partials
        - main.html
        - view.html
    /res
        // app and cordova images
    /spec
        // tests
```

Build and run your project, and you should be good to go.

## Roadmap
* Subgenerators
* Choice between Angular stable or unstable
* Tests

## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
