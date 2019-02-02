import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from '../services/UserSettings.service';
import { SearchesService } from './searches.service';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.css']
})

export class SearchesComponent implements OnInit {

  private lastSearches = Array<Object>();

  constructor(
    private searchesService: SearchesService,
    public _userDataService: UserSettingsService) { }

  ngOnInit(): void {
    this.searchesService.result.subscribe(t => this.lastSearches = t);
  }

  handleClear() {
    this.searchesService.clearSearches();
  }
}
