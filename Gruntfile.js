module.exports = function(grunt) {

  grunt.initConfig({
    jasmine_node: {
      options: {
        forceExit: true, 
      }, 
      all: ['spec/']
    },
    jshint: {
      options: {
        node: true
      },
      all: [
      'Gruntfile.js', 
      './src/**/*.js',
      './spec/**/*.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jasmine_node', 'jshint']);
  grunt.registerTask('jasmine', ['jasmine_node']);
};