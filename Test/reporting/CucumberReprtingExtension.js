"use strict";
//PASO 1: CREATE A JSON FILE DIRECTORY FILE
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFormatter = exports.CucumberReportExtension = void 0;
var fs = __importStar(require("fs"));
var mkdirp_1 = require("mkdirp");
var report = __importStar(require("cucumber-html-reporter"));
var Cucumber = require('cucumber');
var CucumberReportExtension = /** @class */ (function () {
    function CucumberReportExtension() {
        var _this = this;
        this.jsonDir = process.cwd() + "/reports/json";
        this.htmlDir = process.cwd() + "/reports/html";
        this.jsonFile = this.jsonDir + "/cucumber_report.json" + "/reports/json";
        this.cucumberReporterOptions = {
            theme: "bootstrap",
            jsonFile: this.jsonFile,
            output: this.htmlDir + "/cucumber_reporter.html",
            reportSuiteAsScenarios: true,
            metadata: {
                "App version": "0.0.1",
                "Test Environment": "Testing",
                "Browser": "Chrome 95.0.945",
                "Plataform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Local"
            }
        };
        this.JsonFormatter = new Cucumber.JsonFormatter({
            log: function (jlog) {
                _this.createReportFile(_this.jsonDir, _this.jsonFile, jlog);
                _this.GenerateCucumberReport(_this.cucumberReporterOptions);
            }
        });
    }
    CucumberReportExtension.prototype.createReportFile = function (dirName, fileName, fileContent) {
        //checa si el directorio existe
        if (!fs.existsSync(dirName))
            mkdirp_1.mkdirp.sync(dirName);
        try {
            fs.writeFileSync(fileName, fileContent);
        }
        catch (message) {
            console.log("Failed to create File/Directory : " + message);
        }
    };
    CucumberReportExtension.prototype.GenerateCucumberReport = function (cucumberReportOption) {
        report.generate(cucumberReportOption);
    };
    return CucumberReportExtension;
}());
exports.CucumberReportExtension = CucumberReportExtension;
exports.JsonFormatter = new CucumberReportExtension().JsonFormatter;
