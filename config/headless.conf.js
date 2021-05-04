const wdioConfig = require('./wdio.conf').config;

wdioConfig.capabilities = [{
	browserName: 'chrome',
	'goog:chromeOptions': {
		args: [
			'--disable-gpu',
			'--headless'
		],
		prefs: {
			'intl.accept_languages': 'en-US'
		}
	}
}];

module.exports.config = wdioConfig;
