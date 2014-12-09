module.exports = function(grunt) {

  grunt.initConfig({
    jasmine_node: {
      options: {
        forceExit: true, 
      }, 
      all: ['spec/']
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('default', ['jasmine_node']);
  grunt.registerTask('jasmine', ['jasmine_node']);
}