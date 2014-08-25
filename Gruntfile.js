/*global module:false*/
module.exports = function(grunt) {
    var LIVERELOAD_PORT = 35729;

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    require('load-grunt-tasks')(grunt);

    var lrSnippet = require('connect-livereload')({
        port: LIVERELOAD_PORT
    });
    var mountFolder = function(connect, dir) {
        return connect.static(require('path').resolve(dir));
    };

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['lib/{,*/}*.js'],
                dest: 'dist/<%= pkg.name %>.v<%= pkg.version %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.v<%= pkg.version %>.min.js'
            }
        },
        jshint: {
            options: grunt.file.readJSON('.jshintrc'),
            lib_test: {
                src: ['lib/{,*/}*.js']
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'nyan'
                },
                src: ['test/*.js']
            }
        },
        watch: {
            options: {
                spawn: false,
                interrupt: true,
                debounceDelay: 250,
                livereload: LIVERELOAD_PORT
            },
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0'
            },
            test: {
                options: {
                    middleware: function(connect) {
                        return [
                            mountFolder(connect, 'test'),
                            mountFolder(connect, '.')
                        ];
                    }
                }
            }
        },
        open: {
            test: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        }
    });



    // Default task.
    grunt.registerTask('default', ['bower', 'mochaTest', 'concat', 'uglify']);

    grunt.registerTask('server:test', 'Runs server for tests development', [
        'connect:test',
        'open',
        'watch'
    ]);

    // Specific tasks
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('hint', ['jshint']);

};