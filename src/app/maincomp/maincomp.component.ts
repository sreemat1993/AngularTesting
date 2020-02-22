import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from '../service-one.service';
import { ServiceSharedOneService } from 'projects/shared/src/app/service-shared-one.service';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {

  constructor(private service1: ServiceOneService, private serviceShared1: ServiceSharedOneService) { }

  ngOnInit() {
  }

}
