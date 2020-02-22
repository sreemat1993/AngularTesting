import { Injectable } from '@angular/core';
import { Project1TwoService } from 'projects/project1/src/app/project1-two.service';

@Injectable({
  providedIn: 'root'
})
export class Project2OneService {

  constructor(private project2Serivce: Project1TwoService) { }
}
