// Inlines your CSS
module.exports = {
  your_target: {
    options: {
      preserveMediaQueries: false,
      applyAttributesTableElements: true,
      applyWidthAttributes: false,
      preserveImportant: true,
      preserveFontFaces: true,
      removeStyleTags: false,
      xmlMode: true,
      webResources: {
        images: false
      }
    },
    files: [{
      expand: true,
      src: ['<%= paths.dist %>/*.html'],
      dest: ''
    }]
  }
};
