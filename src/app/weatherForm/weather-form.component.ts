import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserSettings } from '../models/UserSettings';
import { UserSettingsService } from '../services/UserSettings.service';
import { UnitSystem } from '../models/unit-system.enum';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html'
})

export class WeatherFormComponent {
  showResults = false;
  // todo make form group!
  city = new FormControl('Warsaw');
  country = new FormControl('pl');
  unitSystem = UnitSystem.metric;

  constructor(private userSettingsService: UserSettingsService) {
  }

  handleSubmit(): void {
    this.showResults = true;
    this.userSettingsService.changeData(
      new UserSettings(this.city.value, this.country.value, this.unitSystem)); // actualize view
  }
}
