import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesPageRoutingModule } from './courses-page-routing.module';
import { CourseslISTModule } from 'src/app/features/courses/courses-list.module';
import { CoursesPageComponent } from 'src/app/pages/courses-page/courses-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    CoursesPageRoutingModule,
    FormsModule,
    CourseslISTModule
  ]
})
export class CoursesPageModule { }
