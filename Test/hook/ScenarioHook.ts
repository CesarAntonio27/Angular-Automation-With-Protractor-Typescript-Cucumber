import {defineSupportCode } from 'cucumber'
import { browser } from 'protractor';
import { config } from '../Steps/config';


defineSupportCode(({ registerHandler }) =>{
    
    registerHandler('BeforeFeature', async()=>{
        console.log('Executing before feature !!');
    });

    registerHandler('BeforeScenario', async()=>{
        await browser.get(config.baseUrl);
    });
    
    registerHandler('AfterStep', async()=>{
        console.log('Step executed !!');
    });

    registerHandler('AfterScenario', async()=>{
        console.log('scenario executed !!');
    });

    registerHandler('AfterFeature', async()=>{
        console.log('Executing after feature !!');
    });



});