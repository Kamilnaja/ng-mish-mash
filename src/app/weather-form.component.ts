import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserSettings } from './models/UserSettings';
import { UserSettingsService } from './services/UserSettings.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html'
})

export class WeatherFormComponent {

  city = new FormControl('Warsaw');
  country = new FormControl('pl');
  unitSystem = 'metric';

  constructor(private userSettingsService: UserSettingsService) {
  }

  handleSubmit(): void {
    this.userSettingsService.changeData(
      new UserSettings(this.city.value, this.country.value, this.unitSystem)); // actualize view
  }
}
