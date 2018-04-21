# Vue Video App
Node-based video app served with Vue.js, Express and Handlebars as a rendering engine.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

**Git:**
To clone this project to a local repository, it is required using [Git](https://git-scm.com/). Follow instructions provided [here](https://git-scm.com/downloads) to install and configure Git.

**NPM:**    
To develop this project, it is required installing and running [NPM](https://www.npmjs.com/), and consequently [NodeJS](https://nodejs.org/en/). Follow instructions provided [here](https://nodejs.org/en/download/) to install and configure properly NodeJS and NPM in your machine.

**MySQL:**
Dynamic content is loaded from database to build the website and present projects information. Database used is simple MySQL, and it is possible to use any distribution or application that runs it (MariaDB, MAMP, WAMP, etc). There is a file into <code>database</code> folder that contains all tables and data exported from this database.

## Deployment

After project cloned and all prerequisites installed, it is necessary running the command below in the root directory to deploy properly all development dependencies of this project:

```
npm install
```

Grunt is implemented as a task runner for this project. Grunt tasks include: concatenation and js uglify; run sass; and autoprefixer through postcss. Grunt watch for changes in js and all scss files. In order to watch changes made in the files, run grunt inside the project folder by the command below:

```
grunt watch
```

Furthermore, it is necessary to import the database content located on the folder called database to local application. It is possible to import it using PHPMyAdmin interface or via command line:

```
mysql -h localhost -u <user> -p <password> <database name> < db_vueVideoApp.sql
```

After importing database content to local database application, it is necessary to configure the credentials to connect to your database. In the root folder there a file called <code>config-sample.js</code>. Copy or rename this file to <code>config.js</code> in the command line:

```
cp config-sample.js config.js
```

Edit <code>config-sample.js</code>, including the correct credentials of your database application according to your OS.

## Run application

This app is using Express as a web application framework and in order to start to serve, run in the command line at root level:

```
npm start

```

## Authors

* [**Barbara Bombachini**](https://github.com/bbombachini)  

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
