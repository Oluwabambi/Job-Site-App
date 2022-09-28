import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TalentsComponent } from './talents/talents.component';
import { BrowseCategoriesComponent } from './browse-categories/browse-categories.component';
import { BrowseJobsComponent } from './browse-jobs/browse-jobs.component';



@NgModule({
  declarations: [
    LandingComponent,
    PagesComponent,
    TalentsComponent,
    BrowseCategoriesComponent,
    BrowseJobsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
