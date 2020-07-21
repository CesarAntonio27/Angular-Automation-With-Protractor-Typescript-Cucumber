//PASO 1: CREATE A JSON FILE DIRECTORY FILE


import * as fs from 'fs'
import { mkdirp} from 'mkdirp'
import * as report from 'cucumber-html-reporter'
const Cucumber = require('cucumber')


export class CucumberReportExtension{

    jsonDir = process.cwd() + "/reports/json";
    htmlDir = process.cwd() + "/reports/html";
    jsonFile = this.jsonDir + "/cucumber_report.json" + "/reports/json";

    private cucumberReporterOptions = {
        theme: "bootstrap",
        jsonFile: this.jsonFile,
        output: this.htmlDir + "/cucumber_reporter.html",
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

    private createReportFile(dirName, fileName, fileContent){
        //checa si el directorio existe
        if(!fs.existsSync(dirName)) 
            mkdirp.sync(dirName);

        try{ 
            fs.writeFileSync(fileName , fileContent);
    }
    catch(message){
        console.log("Failed to create File/Directory : " + message );
    }
            
}

private GenerateCucumberReport(cucumberReportOption){
    report.generate(cucumberReportOption);
} 
}