module.exports = function(grunt) {
  var log = function (err, stdout, stderr, cb) {
    console.log(stdout);
    cb();
  }
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    builddir: 'assets',
    bootstrapdir: 'node_modules/bootstrap/js/dist/',
    jquerydir: 'node_modules/jquery/dist/',
    popperjsdir: 'node_modules/popper.js/dist/',
    instafeeddir: 'node_modules/instafeed.js',
    banner: '/*!\n' +
    ' * <%= pkg.name %> v<%= pkg.version %>\n' +
    ' * Homepage: <%= pkg.homepage %>\n' +
    ' * Copyright 2017-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
    ' * Licensed under <%= pkg.license %>\n' +
    '*/\n',
    sass: {
      dist: {
        options: {
          bundleExec: true,
          style: 'compressed',
          trace: true,
          sourcemap: 'none'
        },
        files: {}
      }
    },
    autoprefixer: {
      dist: {
        src: '*/main.css'
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      js: {
        src: [
          '<%=jquerydir%>/jquery.slim.js', // Bootstrap's dependency
          '<%=popperjsdir%>/umd/popper.js', // Bootstrap's dependency
          //'node_modules/bootstrap/dist/js/bootstrap.js',
          '<%=bootstrapdir%>/util.js', // Required by .navbar-collapse
          //'<%=bootstrapdir%>/alert.js',
          //'<%=bootstrapdir%>/button.js',
          //'<%=bootstrapdir%>/carousel.js',
          '<%=bootstrapdir%>/collapse.js', // Required by .navbar-collapse
          '<%=bootstrapdir%>/dropdown.js', // Required by .navbar-collapse
          //'<%=bootstrapdir%>/modal.js',
          //'<%=bootstrapdir%>/tooltip.js',
          //'<%=bootstrapdir%>/popover.js',
          //'<%=bootstrapdir%>/scrollspy.js',
          //'<%=bootstrapdir%>/tab.js',
          '<%=bootstrapdir%>/index.js',
        ],
        dest: '<%=builddir%>/js/main.js'
      },
      funjs: {
        src: [
          '<%= instafeeddir %>/instafeed.min.js',
          'js/fun.js'
        ],
        dest: '<%= builddir %>/js/fun.js'
      }
    },
    uglify: {
      options: {
        compress: {
          warnings: false
        },
        mangle: true,
        preserveComments: /^!|@preserve|@license|@cc_on/i
      },
      js: {
        src: '<%= concat.js.dest %>',
        dest: '<%= builddir %>/js/main.min.js'
      },
      funjs: {
        src: '<%= concat.funjs.dest %>',
        dest: '<%= builddir %>/js/fun.min.js'
      }
    },
    clean: {
      assets: [
        'assets/js/*.js', '!assets/js/*.min.js',
        'assets/css/*.css', '!assets/css/*.min.css'
      ]
    },
    uncss: {
      dist: {
        options: {
          ignore: [
            // needed (no idea why it gets uncss-ed)
            '.main img.post-picture',
            // needed for Bootstrap's pager buttons
            /(#|\.)pager.*/,
            // needed for Bootstrap's transitions
            '.bs.carousel',
            '.slid.bs.carousel',
            '.slide.bs.carousel',
            '.fade',
            '.fade.in',
            '.collapse',
            '.collapse.in',
            '.collapsing',
            '.alert-danger',
            '.logged-in .navbar-default',
            /^\.carousel-inner.*/,
            '#float-toc',
            '#float-toc a',
            /^\.modal-.*/,
            '.modal.fade.in',
            /(#|\.)modal(\-[a-zA-Z]+)?/,
            '.navbar-toggle.open',
            '.fade .modal-dialog',
            '.logged-in .navbar-fixed-top',
            '.navbar-fixed-top',
            '/^\.navbar-collapse.*/',
            '.navbar-inverse .innovations.navbar-toggle.open',
            '.single-innovation .navbar-inverse .innovations.navbar-toggle.open',
            '#innovations.collapse.in',
            'ul.page-numbers li a.prev',
            '.open',
            '.open > .dropdown-menu',
            '.open > a',
            '.alert-danger',
            '.visible-xs',
            '.noscript-warning',
            '.close',
            '.alert-dismissible',
            '.page.calendar .events .panel:hover .fa-angle-down.open',
            '.fa-angle-down.open',
            // needed for instafeed
            '.main #userfeed',
            '.main #userfeed a',
            '.main #userfeed:hover a',
            '.main #userfeed img'
          ],
          stylesheets: ['assets/css/main.css'],
          htmlroot: './_site/',
          media: ['(min-width: 992px)', '(min-width: 768px)', '(max-width: 767px)']
        },
        files: {
          'assets/css/main.css': ['_site/*.html', '_site/*/*.html']
        }
      }
    },
    shell: {
      jekyll: {
        command: 'bundle-2.5 exec jekyll build',
        options: {
          callback: log
        }
      },
      jekyll_incremental: {
        command: 'bundle-2.5 exec jekyll build --incremental',
        options: {
          callback: log
        }
      },
      htmlproofer: {
        command: 'bundle-2.5 exec htmlproofer --assume-extension --timeframe 7d --url-ignore=http://dx.doi.org/10.1038/ncb2018,http://dx.doi.org/10.1038/nrg2904 --check-html ./_site/',
        options: {
          callback: log
        }
      },
      updatecss: {
        command: 'cp assets/css/main.min.css _site/assets/css',
        options: {
          callback: log
        }
      }
    },
    watch: {
      sass: {
        files: 'scss/*.scss',
        tasks: ['build-css', 'dist-css'],
        options: {
          spawn: false
        }
      },
      jekyll_collections: {
        files: [
          '_people/*.md',
          '_pubs/*.md'
        ],
        tasks: 'shell:jekyll',
        options: {
          spawn: false
        }
      },
      jekyll: {
        files: [
          '_config.yml',
          'index.md',
          '_layouts/*',
          '_posts/*',
          '_includes/*',
          '_pages/*',
          'assets/js/*',
          'assets/pub/*',
          'assets/vid/*'
          // Omitting assets/css on purpose to prevent an endless update.
        ],
        tasks: 'shell:jekyll_incremental',
        options: {
          livereload: true,
          spawn: false
        }
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      watch: {
        tasks: [
          'watch:sass',
          'watch:jekyll_collections',
          'watch:jekyll']
      }
    },
    connect: {
      base: {
        options: {
          base: '_site',
          port: 3000,
          livereload: true,
          open: true
        }
      },
      keepalive: {
        options: {
          port: 3000,
          livereload: true,
          keepalive: true,
          open: true
        }
      }
    }
  });

  grunt.registerTask('build-css', 'build css', function() {
    var sassDest = '<%=builddir%>/css/main.css';
    var files = {};
    files[sassDest] = 'scss/main.scss';
    grunt.config('sass.dist.files', files);
    grunt.config('sass.dist.options.style', 'nested');
    grunt.task.run([
      'sass:dist',
      'prefix-css:' + sassDest,
      'compress-css:' + sassDest + ':<%=builddir%>/css/main.min.css'
    ]);
  });

  grunt.registerTask('dist-css', 'uncss and minify and update css in _site', function() {
    grunt.task.run([
      'uncss:dist',
      'compress-css:<%=builddir%>/css/main.css:<%=builddir%>/css/main.min.css',
      'shell:updatecss'
    ]);
  });

  grunt.registerTask('prefix-css', 'autoprefix a generic css', function(fileSrc) {
    grunt.config('autoprefixer.dist.src', fileSrc);
    grunt.task.run('autoprefixer');
  });

  grunt.registerTask('compress-css', 'compress a generic css', function(fileSrc, fileDst) {
    var files = {};
    files[fileDst] = fileSrc;
    grunt.config('sass.dist.files', files);
    grunt.config('sass.dist.options.style', 'compressed');
    grunt.task.run(['sass:dist']);
  });

  grunt.registerTask('build', [
    'concat:js',
    'uglify:js',
    'concat:funjs',
    'uglify:funjs',
    'build-css',
    'shell:jekyll',
    'dist-css', // XXX: Requires the generated html output, must be after jekyll.
    'clean:assets'
  ]);

  grunt.registerTask('serve', [
    'build',
    'connect:base',
    'concurrent:watch',
  ]);

  grunt.registerTask('default', 'serve');
};

// convert -resize "1000>" -strip -interlace JPEG -sampling-factor 4:2:0 -quality 70% -colorspace RGB src.jpeg dst.jpeg
