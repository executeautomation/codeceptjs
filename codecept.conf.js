exports.config = {
  tests: './*_test.js',
  output: './output',
  multiple: {
    basic: {
      browsers: ["chrome", "firefox"]
    }
  },
  helpers: {
    Playwright: {
      url: 'http://executeautomation.com/demosite',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjsdemo'
}