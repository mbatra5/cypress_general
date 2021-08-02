// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
/// <reference types="@shelex/cypress-allure-plugin" />
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
  /* on('before:browser:launch', (browser = {}, launchOptions) => {
    console.log(launchOptions.args)
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--start-fullscreen')
      launchOptions.args.push('--auto-open-devtools-for-tabs')

      return launchOptions
    }

    if (browser.name === 'chrome') {
      launchOptions.preferences.fullscreen = true
      launchOptions.preferences.darkTheme = true
      launchOptions.args.push('--auto-open-devtools-for-tabs')

      return launchOptions
    }
  })*/
};

require("@applitools/eyes-cypress")(module);
