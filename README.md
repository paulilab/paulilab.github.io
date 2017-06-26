Webpage of the Lab of Andrea Pauli
==================================


Setup
-----

checkout bootstrap / bootstrap-sass

### Install less

npm init
npm install less --save
npm install less-plugin-clean-css

### Compile less

./node_modules/.bin/lessc less/main.less assets/css/main.css --verbose
./node_modules/.bin/lessc less/main.less assets/css/main.min.css --clean-css --verbose



Correrrrrrrect:

Install npm and grunt-cli globally
npm install grunt-cli

npm init
npm install grunt --save-dev
npm install jit-grunt --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-less --save-dev
npm install bootstrap --save-dev
