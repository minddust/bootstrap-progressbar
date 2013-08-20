module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> | Copyright (c) 2012-<%= grunt.template.today("yyyy") %> <%= pkg.author %> | MIT License | minddust.com */\n',

        clean: {
            css: ['css']
        },

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            build: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        },

        recess: {
            options: {
                compile: true
            },
            bs_2_0_0:     { src: ['resources/bootstrap-progressbar-2.0.0.less'], dest: 'css/bootstrap-progressbar-2.0.0.css' },
            bs_2_0_0_min: { src: ['resources/bootstrap-progressbar-2.0.0.less'], dest: 'css/bootstrap-progressbar-2.0.0.min.css', options: { compress: true } },
            bs_2_0_1:     { src: ['resources/bootstrap-progressbar-2.0.1.less'], dest: 'css/bootstrap-progressbar-2.0.1.css' },
            bs_2_0_1_min: { src: ['resources/bootstrap-progressbar-2.0.1.less'], dest: 'css/bootstrap-progressbar-2.0.1.min.css', options: { compress: true } },
            bs_2_0_2:     { src: ['resources/bootstrap-progressbar-2.0.2.less'], dest: 'css/bootstrap-progressbar-2.0.2.css' },
            bs_2_0_2_min: { src: ['resources/bootstrap-progressbar-2.0.2.less'], dest: 'css/bootstrap-progressbar-2.0.2.min.css', options: { compress: true } },
            bs_2_0_3:     { src: ['resources/bootstrap-progressbar-2.0.3.less'], dest: 'css/bootstrap-progressbar-2.0.3.css' },
            bs_2_0_3_min: { src: ['resources/bootstrap-progressbar-2.0.3.less'], dest: 'css/bootstrap-progressbar-2.0.3.min.css', options: { compress: true } },
            bs_2_0_4:     { src: ['resources/bootstrap-progressbar-2.0.4.less'], dest: 'css/bootstrap-progressbar-2.0.4.css' },
            bs_2_0_4_min: { src: ['resources/bootstrap-progressbar-2.0.4.less'], dest: 'css/bootstrap-progressbar-2.0.4.min.css', options: { compress: true } },
            bs_2_1_0:     { src: ['resources/bootstrap-progressbar-2.1.0.less'], dest: 'css/bootstrap-progressbar-2.1.0.css' },
            bs_2_1_0_min: { src: ['resources/bootstrap-progressbar-2.1.0.less'], dest: 'css/bootstrap-progressbar-2.1.0.min.css', options: { compress: true } },
            bs_2_1_1:     { src: ['resources/bootstrap-progressbar-2.1.1.less'], dest: 'css/bootstrap-progressbar-2.1.1.css' },
            bs_2_1_1_min: { src: ['resources/bootstrap-progressbar-2.1.1.less'], dest: 'css/bootstrap-progressbar-2.1.1.min.css', options: { compress: true } },
            bs_2_2_0:     { src: ['resources/bootstrap-progressbar-2.2.0.less'], dest: 'css/bootstrap-progressbar-2.2.0.css' },
            bs_2_2_0_min: { src: ['resources/bootstrap-progressbar-2.2.0.less'], dest: 'css/bootstrap-progressbar-2.2.0.min.css', options: { compress: true } },
            bs_2_2_1:     { src: ['resources/bootstrap-progressbar-2.2.1.less'], dest: 'css/bootstrap-progressbar-2.2.1.css' },
            bs_2_2_1_min: { src: ['resources/bootstrap-progressbar-2.2.1.less'], dest: 'css/bootstrap-progressbar-2.2.1.min.css', options: { compress: true } },
            bs_2_2_2:     { src: ['resources/bootstrap-progressbar-2.2.2.less'], dest: 'css/bootstrap-progressbar-2.2.2.css' },
            bs_2_2_2_min: { src: ['resources/bootstrap-progressbar-2.2.2.less'], dest: 'css/bootstrap-progressbar-2.2.2.min.css', options: { compress: true } },
            bs_2_3_0:     { src: ['resources/bootstrap-progressbar-2.3.0.less'], dest: 'css/bootstrap-progressbar-2.3.0.css' },
            bs_2_3_0_min: { src: ['resources/bootstrap-progressbar-2.3.0.less'], dest: 'css/bootstrap-progressbar-2.3.0.min.css', options: { compress: true } },
            bs_2_3_1:     { src: ['resources/bootstrap-progressbar-2.3.1.less'], dest: 'css/bootstrap-progressbar-2.3.1.css' },
            bs_2_3_1_min: { src: ['resources/bootstrap-progressbar-2.3.1.less'], dest: 'css/bootstrap-progressbar-2.3.1.min.css', options: { compress: true } },
            bs_2_3_2:     { src: ['resources/bootstrap-progressbar-2.3.2.less'], dest: 'css/bootstrap-progressbar-2.3.2.css' },
            bs_2_3_2_min: { src: ['resources/bootstrap-progressbar-2.3.2.less'], dest: 'css/bootstrap-progressbar-2.3.2.min.css', options: { compress: true } },
            bs_3_0_0_rc1:     { src: ['resources/bootstrap-progressbar-3.0.0-rc1.less'], dest: 'css/bootstrap-progressbar-3.0.0-rc1.css' },
            bs_3_0_0_rc1_min: { src: ['resources/bootstrap-progressbar-3.0.0-rc1.less'], dest: 'css/bootstrap-progressbar-3.0.0-rc1.min.css', options: { compress: true } },
            bs_3_0_0_rc2:     { src: ['resources/bootstrap-progressbar-3.0.0-rc2.less'], dest: 'css/bootstrap-progressbar-3.0.0-rc2.css' },
            bs_3_0_0_rc2_min: { src: ['resources/bootstrap-progressbar-3.0.0-rc2.less'], dest: 'css/bootstrap-progressbar-3.0.0-rc2.min.css', options: { compress: true } },
            bs_3_0_0:     { src: ['resources/bootstrap-progressbar-3.0.0.less'], dest: 'css/bootstrap-progressbar-3.0.0.css' },
            bs_3_0_0_min: { src: ['resources/bootstrap-progressbar-3.0.0.less'], dest: 'css/bootstrap-progressbar-3.0.0.min.css', options: { compress: true } }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-recess');

    grunt.registerTask('test', []);  // TODO: include tests task
    grunt.registerTask('dist-js', ['uglify']);
    grunt.registerTask('dist-css', ['recess']);
    grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js']);

    grunt.registerTask('default', ['test', 'dist']);
};
