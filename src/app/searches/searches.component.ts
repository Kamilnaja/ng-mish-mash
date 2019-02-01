import { Component, OnInit } from '@angular/core';
import { SearchesService } from './searches.service';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.css']
})

export class SearchesComponent implements OnInit {

  private _res = Array<Object>();

  constructor(private searchesService: SearchesService) { }

  ngOnInit(): void {
    this.searchesService.result.subscribe(t => this._res = t);
  }

  addToTable() {
    this.searchesService.saveToLocal(1);
  }

  handleClear() {
    this.searchesService.clearSearches();
  }
}
