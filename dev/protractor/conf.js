exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },
  specs: [
      'Support/*.js',
      'PageObjects/*.js',
      'specs/*.js'
  ],
  allScriptsTimeout: 20*1000,
  baseUrl: 'https://cat.3m.com'

};
