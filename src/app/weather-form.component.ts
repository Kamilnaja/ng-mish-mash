import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserSettings } from './models/UserSettings';
import { UserDataService } from './services/UserData.service';
import { WeatherService } from './services/app.weather.service';
import { IUserSettings } from './interfaces/IUserSettings';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html'
})

export class WeatherFormComponent {

  city = new FormControl('Warsaw');
  country = new FormControl('pl');

  private _userSettings: UserSettings;

  constructor(
    private _userDataService: UserDataService,
    private _weatherService: WeatherService
  ) {
    this._userSettings = new UserSettings();
  }

  handleSubmit(): void {
    const dto: IUserSettings = {
      city: this.city.value,
      country: this.country.value,
      unitSystem: 'Metric'
    };
    this._userDataService.changeData(dto); // actualize view
    this._weatherService._userChoose(dto); // make call to service
  }
}
