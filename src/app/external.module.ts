import { NgModule } from '@angular/core';
import { Project1Module } from 'projects/project1/src/app/app.module';
import { Project2Module } from 'projects/project2/src/app/app.module';

@NgModule({
    imports: [
        Project1Module,
        Project2Module
    ]
})
export class ExternalModule { }
