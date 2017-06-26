module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-less');
  //grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    builddir: 'assets',
    bootstrapdir: 'node_modules/bootstrap/',
    fontawesomedir: 'node_modules/font-awesome/',
    jquerydir: 'node_modules/jquery/',
    jqueryCheck: [ // Taken from bootstrap/grunt/configBridge.json
      "if (typeof jQuery === 'undefined') {",
      "  throw new Error('Bootstrap\\'s JavaScript requires jQuery')",
      "}\n"
    ],
    jqueryVersionCheck: [ // Taken from bootstrap/grunt/configBridge.json
      "+function ($) {",
      "  'use strict';",
      "  var version = $.fn.jquery.split(' ')[0].split('.')",
      "  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {",
      "    throw new Error('Bootstrap\\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')",
      "  }",
      "}(jQuery);\n\n"
    ],
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
        src: ['<%=jquerydir%>/dist/jquery.min.js'],
        dest: '<%=builddir%>/js/'
      },
      fontawesome: {
        files: [
          {
            src: ['<%=fontawesomedir%>/css/font-awesome.min.css'],
            dest: '<%builddir%>/css/'
          },
          {
            expand: true,
            src: ['<%=fontawesomedir%>/fonts/*'],
            dest: '<%builddir%>/fonts/'
          }
        ]
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
          '<%=bootstrapdir%>/js/collapse.js',
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
    watch: {
      css: {
        files: ['less/variables.less', 'less/main.less', 'less/custom.less'],
        tasks: 'build-css',
        options: {
          livereload: true,
          nospawn: true
        },
      },
      html: {
        files: ['index.html'],
        tasks: 'build-html',
        options: {
          livereload: true,
          nospawn: true
        }
      }
    },
    connect: {
      base: {
        options: {
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
    var lessDest;
    var lessSrc;
    var files = {};
    var dist = {};
    lessDest = '<%=builddir%>/css/main.css';
    lessSrc = [ 'less/main.less' ];

    files = {}; files[lessDest] = lessSrc;
    grunt.config('less.dist.files', files);
    grunt.config('less.dist.options.compress', false);

    grunt.task.run(['less:dist', 'prefix-css:' + lessDest,
      'compress-css:'+lessDest+':'+'<%=builddir%>/css/main.min.css']);
  });

  grunt.registerTask('prefix-css', 'autoprefix a generic css', function(fileSrc) {
    grunt.config('autoprefixer.dist.src', fileSrc);
    grunt.task.run('autoprefixer');
  });

  grunt.registerTask('compress-css', 'compress a generic css', function(fileSrc, fileDst) {
    var files = {}; files[fileDst] = fileSrc;
    grunt.log.writeln('compressing file ' + fileSrc);

    grunt.config('less.dist.files', files);
    grunt.config('less.dist.options.compress', true);
    grunt.task.run(['less:dist']);
  });

  grunt.registerTask('build-js', 'build js', function() {
    grunt.task.run(['copy:jquery', 'concat:bootstrap']);
  });

  grunt.registerTask('server', 'connect:keepalive');

  grunt.registerTask('default', ['copy:fontawesome', 'build-js', 'build-css', 'connect:base', 'watch:css']);
};
