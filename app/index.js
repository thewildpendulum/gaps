'use strict';
var util = require('util'),
    path = require('path'),
    fs = require('fs'),
    yeoman = require('yeoman-generator'),
    AngularPhonegapSeedGenerator;


AngularPhonegapSeedGenerator = module.exports = function AngularPhonegapSeedGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies();
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AngularPhonegapSeedGenerator, yeoman.generators.Base);

AngularPhonegapSeedGenerator.prototype.greet = function greet() {
    // have Yeoman greet the user.
    console.log(this.yeoman);
};

AngularPhonegapSeedGenerator.prototype.phonegapCheck = function phonegapCheck() {
    // check this dir contains www
    var list = fs.readdirSync(process.cwd());

    if (list.indexOf('www') === -1) {
        console.log('This generator must be run from the root of a PhoneGap project, but we don\'t seem to be in one.');
        console.log('You may stop running this generator with Ctrl+C in order to navigate to a PhoneGap project and try again.');
    }
};

AngularPhonegapSeedGenerator.prototype.askProjectName = function askProjectName() {
    // prompt for project name
    var cb = this.async(),
        prompts = [{
            type: 'input',
            name: 'appName',
            message: 'Please, enter a name for your Angular app.',
            default: 'myApp'
        }];

    this.prompt(prompts, function (props) {
        this.appName = props.appName;

        cb();
    }.bind(this));
};

AngularPhonegapSeedGenerator.prototype.app = function app() {
    // dependencies
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
};

AngularPhonegapSeedGenerator.prototype.makeDirs = function makeDirs() {
    // create lib and partials directories
    this.mkdir('www/lib/angular');
    this.mkdir('www/partials');
};

AngularPhonegapSeedGenerator.prototype.projectFiles = function projectFiles() {
    // copy project files
    this.template('_index.html', 'www/index.html');
    this.template('js/_app.js', 'www/js/app.js');
    this.template('js/_controllers.js', 'www/js/controllers.js');
    this.template('js/_services.js', 'www/js/services.js');

    this.copy('partials/main.html', 'www/partials/main.html');
    this.copy('partials/view.html', 'www/partials/view.html');
};

AngularPhonegapSeedGenerator.prototype.getAngularUnstable = function getAngularUnstable() {
    var cb = this.async();

    this.fetch('http://ci.angularjs.org/job/angular.js-angular-master/lastSuccessfulBuild/artifact/build/angular.js',
                'www/lib/angular/angular.js',
                function (err) {
                    if (err) {
                      console.log(err);
                    }

                    cb();
                });
};

AngularPhonegapSeedGenerator.prototype.getAngularRoute = function getAngularRoute() {
    var cb = this.async();

    this.fetch('http://ci.angularjs.org/job/angular.js-angular-master/lastSuccessfulBuild/artifact/build/angular-route.js',
                'www/lib/angular/angular-route.js',
                function (err) {
                    if (err) {
                        console.log(err);
                    }

                    cb();
                });
};
