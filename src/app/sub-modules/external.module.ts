import { NgModule } from '@angular/core';
import { Project1Module } from '../../../projects/project1/src/app/app.module';

@NgModule({
    imports: [
        Project1Module
    ],
    exports: [
        Project1Module
    ]
})
export class ExternalModuleProject1 { }
