Webpage of the Lab of Andrea Pauli
==================================


Dev setup
---------

### To compile js and less:

1. Install nodejs + npm
2. Install grunt-cli globally
    npm install grunt-cli
3. Install the rest locally using package.json
    npm install

### To run jekyll:

1. Install recent ruby version from MacPorts (now: 2.4)
    sudo port install ruby24 rb24-bundler
2. Install jekyll as a local gem
    gem2.4 install --user-install jekyll
    export PATH=~/.gem/ruby/2.4.0/bin:$PATH


Deploying
---------

1. checkout master branch
2. rebase on the base branch
3. run grunt
4. amend to the last assets commit
5. push


Simple usage - Editing
----------------------
