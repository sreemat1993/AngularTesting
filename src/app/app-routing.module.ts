import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'project1', loadChildren: './sub-modules/external.module#ExternalModuleProject1'
},
{
  path: 'project2', loadChildren: './sub-modules/external.module2#ExternalModuleProject2'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
