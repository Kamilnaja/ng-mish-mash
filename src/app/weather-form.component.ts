import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserSettings } from './models/UserSettings';
import { UserDataService } from './services/UserData.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html'
})

export class WeatherFormComponent {

  city = new FormControl('Warsaw');
  country = new FormControl('pl');
  _userSettings: UserSettings;

  constructor(private service: UserDataService) {
    this._userSettings = new UserSettings();
  }

  handleSubmit(): void {
    const dto = {
      city: this.city.value,
      country: this.country.value,
      unitSystem: 'Metric'
    };
    this.service.changeData(dto);
  }
}
