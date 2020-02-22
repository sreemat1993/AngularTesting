import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './../../../shared/src/app/app.module';
import { Subcomp2Component } from './subcomp2/subcomp2.component';
@NgModule({
  declarations: [
    AppComponent,
    Subcomp2Component
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class Project2Module { }
