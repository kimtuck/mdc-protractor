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
  baseUrl: 'http://cat.3m.com'

};
