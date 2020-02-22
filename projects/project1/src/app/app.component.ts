import { Component } from '@angular/core';
import { Project1OneService } from './project1-one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  constructor(private project1Service: Project1OneService) {

  }
}
