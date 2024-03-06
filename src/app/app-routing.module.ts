import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './counter/display/display.component';
import { ButtonComponent } from './counter/button/button.component';
import { BlogComponent } from './counter/blog/blog.component';
import { RouteQueryCheckComponent } from './route-query-check/route-query-check.component';

const routes: Routes = [
  {
    path:'Home',
    component:ButtonComponent
  },
  {
    path:'counter',
    component:DisplayComponent
  },
  {
    path:'Blog',
    component:BlogComponent
  },
  {
    path:'Blog/edit/:id',
    component:RouteQueryCheckComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
