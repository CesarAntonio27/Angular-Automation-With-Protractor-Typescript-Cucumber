//llamando las clases
import {browser, element, by, $$, $} from 'protractor';

export enum IdentificationType{
    Id,
    Name,
    Css,
    Xpath,
    LinkText
}

export class BasePages {

    ElementLocator(obj){

        //HECHO CON SWICH CASE 
        switch(obj.type){
            case IdentificationType[IdentificationType.Id]:
                return element(by.id(obj.value));
            case IdentificationType[IdentificationType.Name]:
                return element(by.name(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return element(by.css(obj.value));
            case IdentificationType[IdentificationType.Xpath]:
                return element(by.xpath(obj.value));
            case IdentificationType[IdentificationType.LinkText]:
                return element(by.linkText(obj.value));
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