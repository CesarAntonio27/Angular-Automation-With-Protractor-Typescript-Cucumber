"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["../feature/*.feature"],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: "http://localhost:8808/",
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['../Steps/*.js', '../hooks/*.js'],
        tags: '@smoke or @regression'
    }
};
