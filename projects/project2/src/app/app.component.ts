import { Component } from '@angular/core';
import { Project2OneService } from './project2-one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  constructor(private project1Service: Project2OneService) { }
}
