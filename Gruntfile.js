module.exports = function(grunt) {
  grunt.initConfig({
    jasmine: {
      tappy: {
        src: 'lib/**/*.js',
        options: {
          specs: 'spec/lib/**/*Spec.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', 'jasmine');
};
