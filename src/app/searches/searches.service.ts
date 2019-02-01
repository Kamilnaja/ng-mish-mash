import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchesService {

  private _oldSearches: Array<object> = [];
  public result = new BehaviorSubject(this._oldSearches);

  saveToLocal(item: Object) {
    this.result.next([...this.result.value, item]);
  }
}
