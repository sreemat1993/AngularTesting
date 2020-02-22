import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../../../shared/src/app/app.module';
import { Subcomp1Component } from './subcomp1/subcomp1.component';
@NgModule({
  declarations: [
    AppComponent,
    Subcomp1Component
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class Project1Module { }
