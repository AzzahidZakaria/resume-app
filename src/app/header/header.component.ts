import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  toggleSidenav() {
    // Implement your toggle logic here
  }

  ngOnInit(): void {
  }

}
