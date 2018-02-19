module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'nativescript-vue': '^1.0.0'
    }
  })

  if(options.codeSharing) {
    api.render('./template/code-share')
  }
}