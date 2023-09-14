import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  skills = [
    { title: 'Angular', description: 'Front-end development framework' },
    { title: 'Spring Boot', description: 'Back-end development framework' },
    // Add more skills here
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
