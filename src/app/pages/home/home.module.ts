import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CoursesModule } from 'src/app/features/courses/courses.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CoursesModule
  ]
})
export class HomeModule { }
