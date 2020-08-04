//PASO 1: CREATE A JSON FILE DIRECTORY FILE


import * as fs from 'fs'
import { mkdirp} from 'mkdirp'
import * as report from 'cucumber-html-reporter'
const Cucumber = require('cucumber')


export class CucumberReportExtension{


    private jsonDir = process.cwd() + "/reports/json";
    private htmlDir = process.cwd() + "/reports/html";
    private jsonFile = CucumberReportExtension.jsonDir  + "/cucumbre_report.json";

    private cucumberReporterOptions = {
        theme: "bootstrap",
        jsonFile: CucumberReportExtension.jsonFile,
        output: CucumberReportExtension.htmlDir + "/cucumber_reporter.html",
        reportSuiteAsScenarios: true,
        metadata:{
            "App version":"0.0.1",
            "Test Environment":"Testing",
            "Browser":"Chrome 95.0.945",
            "Plataform":"Windows 10",
            "Parallel":"Scenarios",
            "Executed":"Local"
        }
    };

    public static CreateReportFile(dirName) {
        //Check of the directory exist
        if (!fs.existsSync(dirName))
            mkdirp.sync(dirName);
    }

    public static GenerateCucumberReport(){
        report.generate(this.cucumberReporterOptions);
    }

//     private createReportFile(dirName, fileName, fileContent){
//         //checa si el directorio existe
//         if(!fs.existsSync(dirName)) 
//             mkdirp.sync(dirName);

//         try{ 
//             fs.writeFileSync(fileName , fileContent);
//     }
//     catch(message){
//         console.log("Failed to create File/Directory : " + message );
//     }
            
// }

// private GenerateCucumberReport(cucumberReportOption){
//     report.generate(cucumberReportOption);
// } 
// JsonFormatter = new Cucumber.JsonFormatter({
//    log: jlog =>{
//        this.createReportFile(this.jsonDir, this.jsonFile, jlog);
//        this.GenerateCucumberReport(this.cucumberReporterOptions);
//    } 
// })
// }

// export let JsonFormatter = new CucumberReportExtension().JsonFormatter;