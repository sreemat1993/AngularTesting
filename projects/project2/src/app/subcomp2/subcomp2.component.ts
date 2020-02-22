import { Component, OnInit } from '@angular/core';
import { ServiceSharedOneService } from 'projects/shared/src/app/service-shared-one.service';
import { Project1OneService } from 'projects/project1/src/app/project1-one.service';
import { ServiceSharedTwoService } from 'projects/shared/src/app/service-shared-two.service';

@Component({
  selector: 'app-subcomp2',
  templateUrl: './subcomp2.component.html',
  styleUrls: ['./subcomp2.component.css']
})
export class Subcomp2Component implements OnInit {

  constructor(private serviceTwo: ServiceSharedTwoService, private projectSerice: Project1OneService) { }

  ngOnInit() {
  }

}
