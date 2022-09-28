import { Component, OnInit } from '@angular/core';
import { JOBS } from 'src/app/jobs-list';

@Component({
  selector: 'app-browse-jobs',
  templateUrl: './browse-jobs.component.html',
  styleUrls: ['./browse-jobs.component.css']
})
export class BrowseJobsComponent implements OnInit {

  jobs = JOBS;

  constructor() { }

  ngOnInit(): void {
  }

}
