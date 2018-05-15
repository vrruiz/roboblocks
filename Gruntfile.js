'use strict';
/*global module:false*/
module.exports = function(grunt) {
    var LIVERELOAD_PORT = 34729;

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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
        clean: {
            tmp: ['tmp'],
            dist: ['dist']
        },
        jst: {
            options: {
                templateSettings: {
                    evaluate: /\{\{#([\s\S]+?)\}\}/g, // {{# console.log("blah") }}
                    interpolate: /\{\{(\s*\w{1,}\s*)\}\}/g, // {{ title }}
                    escape: /\{\{\{(\s*\w{1,}?\s*)\}\}\}/g // {{{ title }}}
                },
                processName: function(filepath) {
                    console.log(filepath);
                    filepath = filepath.split('/');
                    return filepath[filepath.length - 1].replace('.c.tpl', '');
                }
            },
            dist: {
                files: {
                    'tmp/jst.js': 'src/blocks/*/*.tpl'
                }
            }
        },
        copy: {
            img: {
                expand: true,
                src: 'src/blocks/*/img/*',
                dest: 'dist/img/blocks/',
                flatten: true,
                filter: 'isFile',
            }
        },
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>\n(function (factory) { if (typeof define === \'function\' && define.amd) {define([\'underscore\',\'blockly-bq\',\'blockly.blocks\'], factory);} else {factory(_, window.Blockly, window.Blocks);}}(function (_, Blockly, Blocks) {\nvar load = function(options) {\n',
                footer: 'return Blockly.Blocks;\n}\nvar RoboBlocks = {load: load};if (typeof define === \'function\' && define.amd) {return RoboBlocks;} else {window.RoboBlocks = RoboBlocks;}\n}));',
                stripBanners: true,
                // Only on 'use_strict' in file
                process: function(src, filepath) {
                    return '// Source: ' + filepath + '\n' + src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                }
            },
            dist: {
                src: ['src/lang.js', 'lang/*.js', 'src/constants.js', 'src/profiles.js', 'src/blockly.extensions.js', 'tmp/**/*.js', 'src/blocks/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            },
            jst: {
                options: {
                    banner: '',
                    footer: '\nvar JST = this.JST;\n'
                },
                src: ['tmp/jst.js'],
                dest: 'tmp/jst.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        jsbeautifier: {
            files: ['dist/roboblocks.js']
        },
        jshint: {
            options: grunt.file.readJSON('.jshintrc'),
            src_test: {
                src: ['src/**/*.js']
            }
        },
        'mocha_phantomjs': {
            options: {
                urls: [
                    'http://localhost:<%= connect.test.options.port %>'
                ],
                setting: 'webSecurityEnabled=false'
            },
            standard: {
                options: {
                    reporter: 'spec'
                }
            },
            tap: {
                options: {
                    reporter: 'tap',
                    output: 'target/test_results.tap'
                }
            },
            xunit: {
                options: {
                    reporter: 'xunit',
                    output: 'target/test_results.xml.dirty'
                }
            }
        },
        watch: {
            options: {
                spawn: false,
                interrupt: true,
                debounceDelay: 250,
                livereload: LIVERELOAD_PORT
            },
            src: {
                files: [
                    'src/**/*.js',
                    'test/**/*.js',
                    'src/**/*.tpl',
                ],
                tasks: ['build']
            }
        },
        connect: {
            options: {
                hostname: '0.0.0.0'
            },
            dev: {
                options: {
                    port: 9009,
                    middleware: function(connect) {
                        return [
                            // Prevent anoying 404 errors from Blockly.workspace media resources
                            mountFolder(connect, 'bower_components/blockly-bq'),
                            mountFolder(connect, 'src'),
                            mountFolder(connect, 'dist'),
                            mountFolder(connect, '.')
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function(connect) {
                        return [
                            // Prevent anoying 404 errors from Blockly.workspace media resources
                            mountFolder(connect, 'bower_components/blockly-bq'),
                            mountFolder(connect, 'test'),
                            mountFolder(connect, '.')
                        ];
                    }
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:<%= connect.dev.options.port %>'
            },
            test: {
                path: 'http://localhost:<%= connect.test.options.port %>'
            }
        }
    });

    // Default task.
    grunt.registerTask('default', [
        'clean',
        'test:tap',
        'build'
    ]);

    grunt.registerTask('build', [
//        'jshint',
        'jst',
        'concat:jst',
        'concat:dist',
        'copy',
        'jsbeautifier',
        'uglify',
        'clean:tmp'
    ]);

    grunt.registerTask('server', [
        'build',
        'connect:dev',
        'open:dev',
        'watch'
    ]);

    grunt.registerTask('server:test', 'Runs server for tests development', [
        'build',
        'connect:test',
        'open:test',
        'watch'
    ]);

    // Specific tasks
    grunt.registerTask('test', [
        'build',
        'connect:test',
        'mocha_phantomjs:standard'
    ]);

    grunt.registerTask('test:tap', [
        'build',
        'connect:test',
        'mocha_phantomjs:tap'
    ]);

    grunt.registerTask('test:xunit', [
        'build',
        'connect:test',
        'mocha_phantomjs:xunit'
    ]);

};
