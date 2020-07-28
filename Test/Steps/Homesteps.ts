import {defineSupportCode, Given, Then, When, TableDefinition} from 'cucumber'
import { HomePage } from '../pages/HomePage';
import { expect, assert } from 'chai'
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

    Then(/^I should see all course information in  coursedetails page$/, async (table: TableDefinition) => {
        
        let localTable = [
            ['Selenium', '2'],
            ['Java','3']
        ]

        
        table.rows().forEach(element => {
            console.log(element);
        });

        assert.deepEqual(localTable, table.rows(), "the datasourse does not matches with the step definition table");
    });

    When(/^I enter text in search from external data source$/, async ()=>{
        await homePage.EnterDataInSearchFromExcel();
    } )
});