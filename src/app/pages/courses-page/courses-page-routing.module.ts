import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent as CoursesPageComponent } from 'src/app/pages/courses-page/courses-page.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesPageRoutingModule { }
