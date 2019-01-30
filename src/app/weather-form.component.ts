import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserSettingsService } from './services/UserSettings.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html'
})

export class WeatherFormComponent {

  city = new FormControl('Warsaw');
  country = new FormControl('pl');

  constructor(private _userDataService: UserSettingsService) { }

  handleSubmit(): void {
    this._userDataService.changeData('lorem', 'ipsum', 'dolor'); // actualize view
  }
}
