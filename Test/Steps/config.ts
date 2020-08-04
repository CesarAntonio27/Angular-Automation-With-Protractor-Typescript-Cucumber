import {Config} from 'protractor'
import { CucumberReportExtension } from '../reporting/CucumberReportingExtension'

export let config: Config ={
    
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    
    directConnect:true,

    SELENIUM_PROMISE_MANAGER:false,

    specs:["../feature/*.feature"],

    

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    baseUrl:"http://localhost:8808/",
    

    //indica en que navegador correra el test (aqui correrá en los dos al mismo tiempo)
    multiCapabilities: [{
        "browserName": "firefox"
    },{
        "browserName":"chrome"
    }],

    suites: {
        "homepage":"../feature/Home.feature",
        "coursedetails":"../feature/CourseDetails.feature"
},
        
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict:true,
        format:['pretty'],
        require:['../Steps/*.js','../hooks/*.js'],
        tags:'@smoke or @regression'
    },

    onComplete: () =>{
        CucumberReportExtension.GenerateCucumberReport();
    }
}