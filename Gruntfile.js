'use strict';
/*global module:false*/
module.exports = function(grunt) {
    var LIVERELOAD_PORT = 35729;

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
        underscore_jst: {
            options: {
                templateSettings: {
                    evaluate:    /\{\{#([\s\S]+?)\}\}/g,        // {{# console.log("blah") }}
                    interpolate : /\{\{\{(\s*\w+?\s*)\}\}\}/g,  // {{ title }}
                    escape : /\{\{(\s*\w+?\s*)\}\}(?!\})/g      // {{{ title }}}
                },
                outputSettings: {
                    style: {
                        namespace: 'JST',
                    },
                    processName: function(filepath) {
                        console.log(filepath);
                        filepath = filepath.split('/');
                        return filepath[filepath.length - 1].replace('.c.tpl', '');
                    }
                }
            },
            dist: {
                files: [{
                    expand: true,
                    src: 'src/blocks/*/*.tpl',
                    rename: function(dest, src) {
                        return src.replace('src/blocks', 'tmp/templates') + '.js';
                    }
                }]
            }
        },
        copy: {
            img: {
                expand: true,
                src: 'src/blocks/*/img/*',
                dest: 'dist/img',
                flatten: true,
                filter: 'isFile',
            }
        },
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>\n(function (factory) { if (typeof define === \'function\' && define.amd) {define([\'blockly\',\'blockly.blocks\',\'blockly.lang\'], factory);} else {factory(window.Blockly, window.Blocks, window.BlocklyLang);}}(function (Blockly, Blocks, BlocklyLang) {\nvar load = function(options) {\n',
                footer: '\n}\nvar RoboBlocks = {load: load};if (typeof define === \'function\' && define.amd) {return RoboBlocks;} else {window.RoboBlocks = RoboBlocks;}\n}));',
                stripBanners: true,
                // Only on 'use_strict' in file
                process: function(src, filepath) {
                    return '// Source: ' + filepath + '\n' + src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                }
            },
            dist: {
                src: ['src/*.js', 'tmp/**/*.js', 'src/blocks/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
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
        jsbeautifier : {
            files : ['dist/roboblocks.js']
        },
        jshint: {
            options: grunt.file.readJSON('.jshintrc'),
            src_test: {
                src: ['src/**/*.js']
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
            src_test: {
                files: '<%= jshint.src_test.src %>',
                tasks: ['jshint:src_test', 'qunit']
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
    grunt.registerTask('default', [
        'clean',
        // 'mochaTest', 
        'jshint',
        'underscore_jst',
        'concat',
        'copy',
        'jsbeautifier',
        'uglify',
        'clean:tmp'
    ]);

    grunt.registerTask('server:test', 'Runs server for tests development', [
        'connect:test',
        'open',
        'watch'
    ]);

    // Specific tasks
    grunt.registerTask('test', ['mochaTest']);

    grunt.loadNpmTasks('grunt-underscore-jst');
};