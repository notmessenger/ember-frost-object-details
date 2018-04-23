'use strict'

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

const environment = process.env.EMBER_ENV
const isTesting = environment === 'test'

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    hinting: !isTesting,
    snippetSearchPaths: [
      'addon',
      'tests/dummy'
    ]
  })

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree()
}
