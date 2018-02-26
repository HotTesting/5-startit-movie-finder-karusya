require('ts-node').register();

module.exports.config = {
    specs: ['./specs/*.spec.ts'],
    //directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: { 
        browserName: 'chrome', 
        enableVNC: true,
        name: "YOUR NAME HERE" // Just to identify your session between others on selenoid ui
        },
        framework: 'mocha',
        mochaOpts: {
            timeout: 60000,
            //reporter: 'nyan'
        }

    }
