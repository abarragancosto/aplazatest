const hooks = require('../test/hooks');
exports.config = {
    runner: 'local',
    specs: [
        './test/features/**/*.feature'
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--disable-gpu'
            ],
            prefs: {
                'intl.accept_languages': 'en-US'
            }
        },
        acceptInsecureCerts: true
    }],
    logLevel: 'error',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['chromedriver', {
            logFileName: 'wdio-chromedriver.log', // default
            outputDir: 'driver-logs' // overwrites the config.outputDir
        }]
    ],
    port: 9515,
    framework: 'cucumber',
    reporters: [['cucumberjs-json', {
		jsonFolder: 'reports/json',
		language: 'en'
	}
	],
		'spec', 'dot'
	],
    cucumberOpts: {
        require: ['./test/step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: false,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: true
    },
    before: hooks.before

};
