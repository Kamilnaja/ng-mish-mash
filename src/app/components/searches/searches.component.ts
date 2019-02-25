import { Component, OnInit } from '@angular/core';
import { SearchesService } from './searches.service';
import { UserSettingsService } from 'src/app/services/UserSettings.service';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.css']
})

export class SearchesComponent implements OnInit {

  private _lastSearches = Array<Object>();

  constructor(
    private searchesService: SearchesService,
    public _userDataService: UserSettingsService) { }

  ngOnInit(): void {
    this.searchesService.result.subscribe(t => this._lastSearches = t);
  }

  handleClear() {
    this.searchesService.clearSearches();
  }

  get lastSearches() {
    return this._lastSearches;
  }
}
