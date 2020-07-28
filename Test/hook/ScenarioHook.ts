const { BeforeAll, Before, After, AfterAll, Status, setDefaultTimeout } = require("cucumber");
import {defineSupportCode } from 'cucumber'
import { browser } from 'protractor';
import { config } from '../Steps/config';
import { CucumberReportExtension } from '../reporting/CucumberReportingExtension';


    setDefaultTimeout(50000);

    BeforeAll(async () => {
        var jsonDir = process.cwd + "reports/json";
        CucumberReportExtension.CreateReportFile(jsonDir);
        console.log("starting the application");
    });

 

    After(async function(scenario) {
        if (scenario.result.status === Status.FAILED) {
            // screenShot is a base-64 encoded PNG
             const screenShot = await browser.takeScreenshot();
             this.attach(screenShot, "image/png");
        }
    });




// defineSupportCode(({ registerHandler, registerListener, setDefaultTimeout }) =>{
    
//     setDefaultTimeout(50000);

//     registerHandler('BeforeFeature', async()=>{
//         console.log('Executing before feature !!');
//     });

//     registerHandler('BeforeScenario', async()=>{
//         await browser.get(config.baseUrl);
//     });
    
//     registerHandler('AfterStep', async()=>{
//         console.log('Step executed !!');
//     });

//     registerHandler('AfterScenario', async()=>{
//         console.log('scenario executed !!');
//     });

//     registerHandler('AfterFeature', async()=>{
//         console.log('Executing after feature !!');
//     });

//     //toma scrennshot cuando falla el test 
//     registerHandler("StepResult", async (StepResult) =>{
//         if(StepResult.isfailed()){
//             return browser.takeScreenshot().then(function(screenShot){
//                 var decodedImage = new Buffer(screenShot, 'base64');
//                 StepResult.attachments.push({
//                     data: decodedImage.toString('base64'),
//                     mimeType: 'image/png'
//                 });
//             });
//         }
//     })

//     registerListener(JsonFormatter);
    
 
// });