//llamando las clases
import {browser, element, by, $$, $} from 'protractor';
import { IdentificationType } from './BasePages';


const Locators = {
    heading: {
        type:IdentificationType[IdentificationType.Xpath],
        value:"//course-thumb/div//h2[text()=' Selenium Framework development ']"
    },
    headings:{
        type:IdentificationType[IdentificationType.Css],
        value:".well.hoverwell.thumbnail>h2"
    }
}
export class HomePage{

    //selenium development course
    heading = element(by.xpath("")
                               .element(by.xpath("//span[contains(text(),'4th')]"));
    //all heading
    headings = $("");

    //open browser 
    OpenBrowser(url: string){
        browser.get(url);
    }
    GetALLHeadings(){
        this.headings.getText().then((text) =>{
            console.log("the heading is: " + text);
        });
    }

    ClikFirstHeading(){
        this.heading.click();
    }
}