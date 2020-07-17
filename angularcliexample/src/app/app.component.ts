import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcliexample';

//aqui creo un metodo con una variable donde contara y guardara el numero de clicks en el boton

incrementetdvalue =1;
incrementvalue()  {
  this.incrementetdvalue += 1;
}
   
}
