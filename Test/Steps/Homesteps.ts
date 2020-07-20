import {defineSupportCode, Given, Then, When} from 'cucumber'
import { HomePage } from '../pages/HomePage';
import { expect } from 'chai'
import { CourseDetailsPage } from '../pages/CourseDetails';


defineSupportCode(({Given, When, Then}) =>{
    
    var homePage = new HomePage(); 
    var coursedetailspage = new CourseDetailsPage();

    Given (/^i navigate to the application$/, async()=>{
        await homePage.OpenBrowser("http://localhost:8808/");
    });

    When (/^I get all the headings$/, async() =>{
        await homePage.GetALLHeadings();
    });
    When(/^I click the '([^\"]*)' course$/, async (headingText) =>{
        await homePage.ClikFirstHeading(headingText.tostring());
    });

    Then(/^I should see '([^\"]*)' course in coursedetails page$/, async (course) => {
        expect(coursedetailspage.GetcourseHeading).to.be.not.null;
    });
});