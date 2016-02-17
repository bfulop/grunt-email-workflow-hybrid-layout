// Takes your SCSS files and compiles them to CSS
module.exports = {
  dist: {
    options: {
      style: 'expanded'
    },
    files: {
      '<%= paths.src %>/css/styles.css': '<%= paths.src %>/css/scss/styles.scss'
    }
  },

  // This task compiles Sass for the browser-baed preview UI.
  // You should not need to edit it.
  preview: {
    options: {
      style: 'compressed'
    },
    files: {
      '<%= paths.preview %>/css/preview.css': '<%= paths.preview %>/scss/preview.scss'
    }
  }
};
