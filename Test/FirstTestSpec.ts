//llamando las clases
import {browser, element, by, $$} from 'protractor';
import { HomePage } from './pages/HomePage';

describe("going to write first test", ()=>{

    //globally
    var homePage = new HomePage();

    it("should pass without any issue", ()=>{

        //open browser
        homePage.OpenBrowser("http://localhost:8808/");

        //Get the headers
        homePage.GetALLHeadings();
        
        //click the firt heading
        homePage.ClikFirstHeading();

        //CLASE 13 COMENTO TODO EL CODIGO POR QUE LO PASE A HOMEPAGE.TS Y LOS CONVERTI EN METODOS, LLAMANDOLOS ARRIBA
        //PARA TENER UN CODIGO MAS LIMPIO


        
        /*//Clase 9 usamos la clase browser para navegar a una app ya hecha por el maestro del curso
        browser.get("http://localhost:8808/");

        //clase 10: estas dos lineas obtienen un elemento de la app y hace click el él
        //var heading = element(by.xpath("//course-thumb/div//h2[text()=' Selenium Framework development ']")); 
        //heading.click();
        
        //clase 11 obtiene todos los elementos de la app
        //la parte {element.all(by.css} puede ser suplida por {$$}
        //var headings = $$(".well.hoverwell.thumbnail>h2");

        //clase 12: obtiene un elemento dentro de otro 
        var headings = element(by.xpath("//course-thumb/div//h2[text()=' Selenium Framework development ']"))
                               .element(by.xpath("//span[contains(text(),'4th')]"));

        //obtiene el nombre en texto de cada elemento y los muestra
        headings.getText().then((text) =>{
            console.log("the heading is: " + text);
        });

        headings.click();
       
        //let a = 12;
        //expect(a).toBe(12);*/

    });
    
    it("should not pass as the values are undefinied", ()=>{
        let u=1;
        expect(u).toBeDefined("Not definied");

    });

    it("without any expectation", ()=>{

    });

});