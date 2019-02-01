import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserSettingsService } from './services/UserSettings.service';
import { UserSettings } from './models/UserSettings';
import { SearchesService } from './searches/searches.service';

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
    const userSettings = new UserSettings(this.city.value, this.country.value, this.unitSystem);
    this._userDataService.changeData(userSettings); // actualize view
  }
}
