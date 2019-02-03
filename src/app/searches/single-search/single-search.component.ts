import { Component, Input } from '@angular/core';
import { UserSettings } from '../../models/UserSettings';
import { UserSettingsService } from '../../services/UserSettings.service';
import { UnitSystem } from '../../unit-system.enum';

@Component({
  selector: 'app-single-search',
  templateUrl: './single-search.component.html'
})

export class SingleSearchComponent {

  @Input() city: string;
  @Input() country: string;
  @Input() unitSystem: UnitSystem;

  constructor(private userSettingsService: UserSettingsService) { }

  handleSubmit() {
    this.userSettingsService.changeData(
      new UserSettings(this.city, this.country, this.unitSystem));
  }

  handleDelete() {
    console.log('deleting');
  }
}
