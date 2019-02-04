import { Component, Input } from '@angular/core';
import { UserSettings } from '../../models/UserSettings';
import { UserSettingsService } from '../../services/UserSettings.service';
import { UnitSystem } from '../../models/unit-system.enum';
import { SearchesService } from '../searches.service';

@Component({
  selector: 'app-single-search',
  templateUrl: './single-search.component.html'
})

export class SingleSearchComponent {

  @Input() city: string;
  @Input() country: string;
  @Input() unitSystem: UnitSystem;
  @Input() uuid: any;

  constructor(private userSettingsService: UserSettingsService, private searchesService: SearchesService) { }

  handleSubmit() {
    this.userSettingsService.changeData(
      new UserSettings(this.city, this.country, this.unitSystem));
  }

  handleDelete() {
    this.searchesService.removeSearch(this.uuid);
  }
}
