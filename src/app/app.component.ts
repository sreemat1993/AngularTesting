import { Component } from '@angular/core';
import { ServiceOneService } from './service-one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  constructor(private serviceOne: ServiceOneService) {

  }
}
