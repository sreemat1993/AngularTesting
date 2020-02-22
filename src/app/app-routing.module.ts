import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'project1', loadChildren: '../../projects/project1/src/app/app.module#AppModule'
},
{
  path: 'project2', loadChildren: '../../projects/project2/src/app/app.module#AppModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
