import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  user = {name: "book",
  "imageUrl":"https://fakeimg.pl/250x100/ff0000/"}
  color= 'red' ;
  log(){
    console.log('Button log');
    
  }

}
