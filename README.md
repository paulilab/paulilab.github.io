Webpage of the Lab of Andrea Pauli
==================================

Editing
-------

* [Editing files in the browser](https://help.github.com/articles/editing-files-in-your-repository/)
* [Markdown syntax](https://daringfireball.net/projects/markdown/syntax)

### sitemap

A `sitemap.xml` is automatically build based on the post publish dates. If you
modify a post after it was published, add `last_modified_at` with the current
data to the front matter.

[Technical info on &lt;lastmod&gt; in
jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap#lastmod-tag).


Deploying
---------

When editing in the browser, the website re-deploys automatically.

Otherwise, one needs to push to the repository using git:

    git push

After changing any javascript or less/css style files, the website has to be
rebuilt offline using grunt, see Developmental setup.

Developmental setup
-------------------

### Installs to compile js and less

1. Install nodejs + npm from ports (now: nodejs6, npm4)
2. Install grunt-cli globally
    npm install -g grunt-cli
3. Install the rest locally using package.json
    npm install

### Installs to run jekyll

1. Install recent ruby version from MacPorts (now: 2.4)
    sudo port install ruby24 rb24-bundler
2. Install the rest locally
    bundle-2.4 install

### Building the website

Running `grunt build` is enough to completely build the website inside `_site`
subdirectory.


### Developing

Running `grunt` (the default task) starts a local webserver on
http://0.0.0.0:3000/ with a live reload.

### Favicon

The favicon is generated from the `logo.svg` template using the [real favicon
generator](http://realfavicongenerator.net/).

