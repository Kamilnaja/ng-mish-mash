import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchesService {
  private _oldSearches: Array<object> = [];
  public result;
  constructor() {

    if (localStorage.getItem('test') == null) {
      this.result = new BehaviorSubject([]);
    } else {
      this.result = new BehaviorSubject(localStorage.getItem('test'));
    }

    console.log(localStorage.getItem('test'));
    console.log(this.result.value);
  }

  saveToLocal(item: Object) {

    let items;
    if (localStorage.getItem('test') == null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('test'));
    }

    items.push(item);
    localStorage.setItem('test', JSON.stringify(items));
    console.log(localStorage.getItem('test'));
    this.result.next(JSON.parse(localStorage.getItem('test')));

  }
}
