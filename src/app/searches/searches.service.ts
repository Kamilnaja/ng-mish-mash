import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserSettings } from '../models/UserSettings';

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

  saveToLocalStorage(item: UserSettings) {

    let items;
    if (localStorage.getItem('test') == null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('test'));
    }

    // restrict last 10 searches, remove last item and add on the begining

    if (this.result.value.length >= 10) {
      items.pop();
    }

    // check duplicates
    let foundIndex;

    if (localStorage.getItem('test') !== null) {
      foundIndex = JSON.parse(localStorage.getItem('test'))
        .findIndex(this.checkIfItemExists(item));
    }

    if (foundIndex !== -1 && foundIndex !== undefined) {
      console.log(`found duplicate on position ${foundIndex}. Attempt to remove this garbage!`);
      items.splice(foundIndex, 1);
    }

    items.unshift(item);

    localStorage.setItem('test', JSON.stringify(items));
    this.result.next(JSON.parse(localStorage.getItem('test')));
  }

  private checkIfItemExists(item: UserSettings): any {
    return (x: { city: string; country: string; }) => x.city === item.city && x.country === item.country;
  }

  clearSearches(): any {
    localStorage.removeItem('test');
    this.result.next([]);
  }
}
