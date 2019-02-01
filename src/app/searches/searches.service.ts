import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchesService {
  private _oldSearches: Array<object> = [];
  public result;

  constructor() {
    this.prepareBehaviourSubject();
  }

  private prepareBehaviourSubject() {
    if (localStorage.getItem('test') == null) {
      this.result = new BehaviorSubject([]);
    } else {
      this.result = new BehaviorSubject(JSON.parse(localStorage.getItem('test')));
    }
  }

  saveToLocal(item: Object) {

    let items;
    if (localStorage.getItem('test') == null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('test'));
    }

    items.unshift(item);
    localStorage.setItem('test', JSON.stringify(items));
    this.result.next(JSON.parse(localStorage.getItem('test')));
  }

  clearSearches(): any {
    localStorage.removeItem('test');
    this.result.next([]);
  }

}
