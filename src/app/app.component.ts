import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon"; //needed to 'register'(i.e. inject) custom .svg icon

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry){
  this.matIconRegistry.addSvgIcon(
    `cuz-letters`,
    `../assets/cuzLetters.svg`
  );
}
  title = 'Cuz Excavating LLC';
}
