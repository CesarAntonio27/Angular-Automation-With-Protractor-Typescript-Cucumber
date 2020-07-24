//llamando las clases
import {browser, element, by, $$, $} from 'protractor';

export enum IdentificationType{
    Id,
    Name,
    Css,
    Js,
    Xpath,
    PartialLinkText,
    ClassName
}

export class BasePages {

    ElementLocator(obj: any){

        //HECHO CON SWICH CASE 
        switch(obj.type){
            case IdentificationType[IdentificationType.Xpath]:
                return element(by.xpath(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return element(by.classname(obj.value));
            case IdentificationType[IdentificationType.Id]:
                return element(by.id(obj.value));
            case IdentificationType[IdentificationType.Js]:
                return element(by.js(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return element(by.css(obj.value));
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

        
    }

}