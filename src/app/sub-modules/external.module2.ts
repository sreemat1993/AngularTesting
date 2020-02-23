import { NgModule } from '@angular/core';
import { Project2Module } from '../../../projects/project2/src/app/app.module';

@NgModule({
    imports: [
        Project2Module
    ],
    exports: [
        Project2Module
    ]
})
export class ExternalModuleProject2 { }
