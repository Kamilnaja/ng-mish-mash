import { Component } from '@angular/core';
import { Language } from './../../enums/Language';

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
      name: 'Report an issue',
      link: 'report'
    }
  ];
  chosenLanguage: Language = Language.en;

  isActive = false;

  toggleMenu() {
    this.isActive = !this.isActive;
  }

  hideMenu() {
    this.isActive = false;
  }
}
