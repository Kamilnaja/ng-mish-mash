import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserSettingsService } from './services/UserSettings.service';
import { UserSettings } from './models/UserSettings';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html'
})

export class WeatherFormComponent {

  city = new FormControl('Warsaw');
  country = new FormControl('pl');
  unitSystem = 'metric';

  constructor(private _userDataService: UserSettingsService) { }

  handleSubmit(): void {
    this._userDataService.changeData(new UserSettings(this.city.value, this.country.value, this.unitSystem)); // actualize view
  }
}
