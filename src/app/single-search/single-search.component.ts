import { Component, Input } from '@angular/core';
import { UserSettings } from '../models/UserSettings';
import { UserSettingsService } from '../services/UserSettings.service';

@Component({
  selector: 'app-single-search',
  templateUrl: './single-search.component.html'
})
export class SingleSearchComponent {

  @Input() city: string;
  @Input() country: string;
  @Input() metricSystem: string;

  constructor(private userSettingsService: UserSettingsService) { }

  handleSubmit() {
    this.userSettingsService.changeData(
      new UserSettings(this.city, this.country, this.metricSystem));
  }
}
