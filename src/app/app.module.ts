import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'projects/shared/src/app/app.module';
import { MaincompComponent } from './maincomp/maincomp.component';

@NgModule({
  declarations: [
    AppComponent,
    MaincompComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
