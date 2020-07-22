"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePages = exports.IdentificationType = void 0;
//llamando las clases
var protractor_1 = require("protractor");
var IdentificationType;
(function (IdentificationType) {
    IdentificationType[IdentificationType["Id"] = 0] = "Id";
    IdentificationType[IdentificationType["Name"] = 1] = "Name";
    IdentificationType[IdentificationType["Css"] = 2] = "Css";
    IdentificationType[IdentificationType["Js"] = 3] = "Js";
    IdentificationType[IdentificationType["Xpath"] = 4] = "Xpath";
    IdentificationType[IdentificationType["PartialLinkText"] = 5] = "PartialLinkText";
    IdentificationType[IdentificationType["ClassName"] = 6] = "ClassName";
})(IdentificationType = exports.IdentificationType || (exports.IdentificationType = {}));
var BasePages = /** @class */ (function () {
    function BasePages() {
    }
    BasePages.prototype.ElementLocator = function (obj) {
        //HECHO CON SWICH CASE 
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return protractor_1.element(protractor_1.by.classname(obj.value));
            case IdentificationType[IdentificationType.Id]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.Js]:
                return protractor_1.element(protractor_1.by.js(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            default:
                break;
        }
        /*css HECHO CON IF´S ANIDADOS

        if(obj.type == IdentificationType[IdentificationType.Css])
            return element(by.css(obj.value));
        else if(obj.type == IdentificationType[IdentificationType.Xpath])
            return element(by.xpath(obj.value));
        else if(obj.type == IdentificationType[IdentificationType.Name])
            return element(by.name(obj.value));
        else if(obj.type == IdentificationType[IdentificationType.LinkText])
            return element(by.linkText(obj.value));*/
    };
    return BasePages;
}());
exports.BasePages = BasePages;
