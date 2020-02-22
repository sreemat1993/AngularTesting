import { Injectable } from '@angular/core';
import { ServiceSharedTwoService } from 'projects/shared/src/app/service-shared-two.service';
import { ServiceTwoService } from './service-two.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {

  constructor(private service2: ServiceSharedTwoService, private serviceOne: ServiceTwoService) { }
}
