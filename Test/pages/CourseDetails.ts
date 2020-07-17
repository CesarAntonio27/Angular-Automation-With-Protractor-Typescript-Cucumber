import { BasePages, IdentificationType } from "./BasePages";

const Locators = {

    Duration:{
        type: IdentificationType[IdentificationType.Xpath],
        value: "//valor del objeto"
    }
}

export class CourseDetailsPage extends BasePages{
    //se obtiene el objeto duration que esta en la app
    duration = this.ElementLocator(Locators.Duration);
    
    //se da clik en el objeto
    clickDuration(){
        this.duration.click();
    }
}