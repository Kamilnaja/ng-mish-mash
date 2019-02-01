import { Component, OnInit } from '@angular/core';
import { SearchesService } from './searches.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.css']
})

export class SearchesComponent implements OnInit {

  private _res = Array<Object>();

  constructor(private ss: SearchesService) { }

  ngOnInit(): void {
    this.ss.result.subscribe(t => this._res = t);
  }

  addToTable() {
    this.ss.saveToLocal(1);
  }
}
