const postcss = require('postcss')

module.exports = postcss.plugin('postcss-root', function (opts) {
  return function (css) {
    let root

    css.walkRules(function (rule) {
      if (rule.selector !== ':root') {
        return
      }

      if (!root) {
        root = rule
      }

      rule.remove()
    })

    if (root) {
      css.prepend(root)
    }
  }
})
