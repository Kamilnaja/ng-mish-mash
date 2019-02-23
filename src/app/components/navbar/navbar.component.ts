import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'Weather app';
  menuItems = [
    { name: 'About' },
    { name: 'Contact' },
    {
      name: 'Report an Issue',
      link: 'report'
    }
  ];

  isActive = false;

  toggleMenu() {
    this.isActive = !this.isActive;
  }

  hideMenu() {
    this.isActive = false;
  }
}
