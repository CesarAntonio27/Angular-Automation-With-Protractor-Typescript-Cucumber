import { BasePages, IdentificationType } from "./BasePages";

const Locators = {

    Duration:{
        type: IdentificationType[IdentificationType.Xpath],
        value: "//valor del objeto"
    },
    courseHeading:{
        type: IdentificationType[IdentificationType.Xpath],
        value:"//h2"
    }
}

export class CourseDetailsPage extends BasePages{
    //se obtiene el objeto duration que esta en la app
    duration = this.ElementLocator(Locators.Duration);

    courseHeading = this.ElementLocator(Locators.courseHeading);
    
    //se da clik en el objeto
    clickDuration(){
        this.duration.click();
    }

    async GetcourseHeading (){
        await this.courseHeading;
    }

}