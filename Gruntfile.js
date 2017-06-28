module.exports = function(grunt) {
  var log = function (err, stdout, stderr, cb) {
    console.log(stdout);
    cb();
  }
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    builddir: 'assets',
    bootstrapdir: 'node_modules/bootstrap/',
    fontawesomedir: 'node_modules/font-awesome/',
    jquerydir: 'node_modules/jquery/dist',
    jqueryCheck: [ // Taken from bootstrap/grunt/configBridge.json
      "if (typeof jQuery === 'undefined') {",
      "  throw new Error('Bootstrap\\'s JavaScript requires jQuery')",
      "}\n"
    ].join("\n"),
    jqueryVersionCheck: [ // Taken from bootstrap/grunt/configBridge.json
      "+function ($) {",
      "  'use strict';",
      "  var version = $.fn.jquery.split(' ')[0].split('.')",
      "  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {",
      "    throw new Error('Bootstrap\\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')",
      "  }",
      "}(jQuery);\n\n"
    ].join("\n"),
    banner: '/*!\n' +
    ' * <%= pkg.name %> v<%= pkg.version %>\n' +
    ' * Homepage: <%= pkg.homepage %>\n' +
    ' * Copyright 2017-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
    ' * Licensed under <%= pkg.license %>\n' +
    '*/\n',
    less: {
      dist: {
        options: {
          compress: false,
          strictMath: true
        },
        files: {}
      }
    },
    autoprefixer: {
      dist: {
        src: '*/main.css'
      }
    },
    copy: {
      jquery: {
        expand: true,
        cwd: '<%=jquerydir%>',
        src: ['jquery.min.js'],
        dest: '<%=builddir%>/js/'
      },
      fontawesome: {
        expand: true,
        cwd: '<%=fontawesomedir%>',
        src: ['css/font-awesome.min.css', 'fonts/*'],
        dest: '<%=builddir%>'
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>\n<%= jqueryCheck %>\n<%= jqueryVersionCheck %>',
        stripBanners: false
      },
      bootstrap: {
        src: [
          '<%=bootstrapdir%>/js/transition.js',
          '<%=bootstrapdir%>/js/alert.js',
          '<%=bootstrapdir%>/js/button.js',
          '<%=bootstrapdir%>/js/carousel.js',
          '<%=bootstrapdir%>/js/collapse.js', // Required by .navbar-collapse
          '<%=bootstrapdir%>/js/dropdown.js',
          '<%=bootstrapdir%>/js/modal.js',
          '<%=bootstrapdir%>/js/tooltip.js',
          '<%=bootstrapdir%>/js/popover.js',
          '<%=bootstrapdir%>/js/scrollspy.js',
          '<%=bootstrapdir%>/js/tab.js',
          '<%=bootstrapdir%>/js/affix.js'
        ],
        dest: '<%=builddir%>/js/bootstrap.js'
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
      bootstrap: {
        src: '<%= concat.bootstrap.dest %>',
        dest: '<%=builddir%>/js/bootstrap.min.js'
      }
    },
    shell: {
      jekyll: {
        command: 'bundle-2.4 exec jekyll build --incremental',
        options: {
          callback: log
        }
      }
    },
    watch: {
      less: {
        files: 'less/*.less',
        tasks: 'build-css',
        options: {
          nospawn: true
        }
      },
      jekyll: {
        files: [
          '_config.yml',
          '*.html',
          '*.md',
          '_layouts/**',
          '_posts/**',
          '_includes/**',
          '*/*.md',
          'assets/**'
        ],
        tasks: 'shell:jekyll',
        options: {
          livereload: true,
          nospawn: true
        }
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      watch: {
        tasks: ['watch:less', 'watch:jekyll']
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
    var lessDest = '<%=builddir%>/css/main.css';
    var files = {};
    files[lessDest] = 'less/main.less';
    grunt.config('less.dist.files', files);
    grunt.config('less.dist.options.compress', false);
    grunt.task.run([
      'less:dist',
      'prefix-css:' + lessDest,
      'compress-css:' + lessDest + ':' + '<%=builddir%>/css/main.min.css']);
  });

  grunt.registerTask('prefix-css', 'autoprefix a generic css', function(fileSrc) {
    grunt.config('autoprefixer.dist.src', fileSrc);
    grunt.task.run('autoprefixer');
  });

  grunt.registerTask('compress-css', 'compress a generic css', function(fileSrc, fileDst) {
    var files = {};
    files[fileDst] = fileSrc;
    grunt.config('less.dist.files', files);
    grunt.config('less.dist.options.compress', true);
    grunt.task.run(['less:dist']);
  });

  grunt.registerTask('server', 'connect:keepalive');

  grunt.registerTask('default', [
    'copy:jquery',
    'copy:fontawesome',
    'concat:bootstrap',
    'uglify:bootstrap',
    'build-css',
    'shell:jekyll',
    'connect:base',
    'concurrent:watch'
  ]);
};
