import { Component, OnInit } from '@angular/core';
import { ServiceSharedOneService } from 'projects/shared/src/app/service-shared-one.service';
import { Project2OneService } from 'projects/project2/src/app/project2-one.service';

@Component({
  selector: 'app-subcomp1',
  templateUrl: './subcomp1.component.html',
  styleUrls: ['./subcomp1.component.css']
})
export class Subcomp1Component implements OnInit {

  constructor(private serviceOne: ServiceSharedOneService, private projectSerivce: Project2OneService) { }

  ngOnInit() {
  }

}
