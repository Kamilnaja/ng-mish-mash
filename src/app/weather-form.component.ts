import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserSettingsService } from './services/UserSettings.service';

@Component({
  styles: ['.container: {padding-top: 30px !important } '],
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html'
})

export class WeatherFormComponent {

  city = new FormControl('Warsaw');
  country = new FormControl('pl');
  unitSystem = 'metric';

  constructor(private _userDataService: UserSettingsService) { }

  handleSubmit(): void {
    this._userDataService.changeData(this.city.value, this.country.value, 'metric'); // actualize view
  }
}
