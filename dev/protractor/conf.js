exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },
  specs: [
      'CommonObjects/*.js',
      'Support/*.js',
      'PageObjects/*.js',
      'specs/*.js'
  ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1000*60*10
    },

    allScriptsTimeout: 200*1000,
  baseUrl: 'https://cat.3m.com'

};
