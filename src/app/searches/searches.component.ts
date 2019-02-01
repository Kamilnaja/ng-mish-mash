import { Component, OnInit } from '@angular/core';
import { SearchesService } from './searches.service';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.css']
})

export class SearchesComponent implements OnInit {

  private lastSearches = Array<Object>();

  constructor(private searchesService: SearchesService) { }

  ngOnInit(): void {
    this.searchesService.result.subscribe(t => this.lastSearches = t);
  }

  handleClear() {
    this.searchesService.clearSearches();
  }
}
