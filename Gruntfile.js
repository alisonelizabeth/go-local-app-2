module.exports = function(grunt) {

  grunt.initConfig({
    dust: {
      assets: {
        files: {
          'dist/compiled-templates.js': 'src/**/*.dust'
        },
        options: {
          wrapper: 'commonjs',
          runtime: false,
          basePath: 'src/templates'
        }
      },
      clientSide: {
        files: {
          'dist/compiled-templates-amd.js': 'src/**/*.dust'
        },
        options: {
          wrapper: 'amd',
          runtime: false,
          basePath: 'src/templates',
          wrapperOptions: {
            deps: {
              dust: 'dustjs-linkedin'
            }
          }
        }
      }
    },
    clean: {
      templates: ['./dist/compiled-templates.js']
    }
  });

  grunt.loadNpmTasks('grunt-dust');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'dust']);

};