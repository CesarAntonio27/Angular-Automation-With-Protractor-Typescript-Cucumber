import {defineSupportCode, Given, Then} from 'cucumber'
import { HomePage } from '../pages/HomePage';

defineSupportCode(({Given, When, Then}) =>{
    
    var homePage = new HomePage(); 
    
    Given (/^i navigate to the application$/, async()=>{
        await homePage.OpenBrowser("http://localhost:8808/");
    });
});