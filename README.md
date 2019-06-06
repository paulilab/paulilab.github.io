Webpage of the Lab of Andrea Pauli
==================================

This is the source of the webpage, the webpage itself is available at
[paulilab.org](http:/paulilab.org/).


Editing
-------

* [Editing files in the browser](https://help.github.com/articles/editing-files-in-your-repository/)
* [Markdown syntax](https://daringfireball.net/projects/markdown/syntax)


### Adding posts

Create an .md file under `/_posts` (start by copying an already existing file).
The filename must have the form `YYYY-MM-DD-some-post.md` to be valid.

A JPEG file with a post picture should be called `YYYYMMDD-SomeLabel.jpg` and
placed in `/assets/img/posts/`. Before adding the picture resize it to have the
larger side no bigger than 1000 px. This will make it load faster.


### Adding publications

Create an .md file under `/_pubs` (start by copying an already existing file).

If a whole publication year is missing, check that it has been added under
`years` inside the `/_config.yml` file.


### Adding/Removing people

Create an .md file under `/_people` (start by copying an already existing file).

A JPEG file with a person picture should be placed in `/assets/img/people/`.
Before adding the picture resize it to have a width of 108 px.


### splash image

The splash image is specified in the front matter using:

    splash: /assets/img/splash/…

If there is no `splash:` record, the `default_splash:` image from `_config.yml`
is used.

Splash image can also be specified for multiple pages at once using the
`splash:` entry in the corresponding layout file.


### Appearance in the search results and on Facebook/Twitter

For pages specify `description: "Some description..."` to have the text
displayed in the search results and on Facebook/Twitter.

For news posts description gets automatically generated from the post's
content.

Specifying `picture: /assets/img/some_picture.jpg` for any page or news post
results in the image being used on Facebook/Twitter.


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

After changing any javascript or sass/css style files, the website has to be
rebuilt offline using grunt, see Developmental setup.


Developmental setup
-------------------

This is a setup for Mac OS. Linux shold be a lot simpler, see .travis.yml for
inspiration.


### Installs to compile js and css

1. Install nodejs from http://nodejs.org/en/download/ (last tested: 10.13.0)
   This also bundles npm.
2. Install the rest locally using package.json
    npm install
3. Install grunt-cli globally
    npm install -g grunt-cli
   or put `./node_modules/.bin/` on your `$PATH`.


### Installs to run jekyll and sass

1. Install recent ruby version from MacPorts (last tested: 2.5)
    sudo port install rb25-bundler
2. Make sure to put the bundle command on PATH (otherwise sass will fail)
    export PATH=/opt/local/libexec/ruby2.5/:$PATH
2. Install the rest locally
    bundle install --path vendor/bundle


### Developing

Running `grunt` (the default task) starts a local webserver on
http://0.0.0.0:3000/ with a live reload.


### Building and publishing the website

Any changes to layout or javascript code needs rebuilding the website using
`grunt`.  Running `grunt build` triggers a complete build of the website
regenerating the relevant CSS/JS assets (`/assets/css/main.min.css`,
`/assets/js/main.min.css` and `/assets/js/fun.min.css`).  The static website
(output of `jekyll`) is put into the `_site` subdirectory.  The changed assets
should be pushed to the github repository. The push will trigger a jekyll run
on the github side and publishing of the changes on the website.

Seeing changes after update might require a refresh in the browser, e.g., Cmd+R
in Firefox.

To ensure predictable results it is advisable to keep the [dependencies and
versions](https://pages.github.com/versions/) available to the jekyll run on
the github side in sync with the local setup (`Gemfile`).

#### Check the website speed

https://developers.google.com/speed/pagespeed/insights

### Favicon

The favicon is generated from the `logo.svg` template using the [real favicon
generator](http://realfavicongenerator.net/).


### SEO

Sitemaps get generated automatically by the jekyll-sitemap plugin.

https://www.bing.com/webmaster/home/dashboard

https://www.google.com/webmasters/tools

https://developers.facebook.com/tools/debug/og/object/

https://search.google.com/structured-data/testing-tool

https://www.seocentro.com/tools/seo/seo-analyzer.html

http://www.seowebpageanalyzer.com/
