import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/categories-list';

@Component({
  selector: 'app-browse-categories',
  templateUrl: './browse-categories.component.html',
  styleUrls: ['./browse-categories.component.css']
})
export class BrowseCategoriesComponent implements OnInit {

  categories = CATEGORIES;
  constructor() { }

  ngOnInit(): void {
  }

}
