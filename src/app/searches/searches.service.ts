import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchesService {

  private _oldSearches: Array<number> = [1, 2, 3];
  public result = new BehaviorSubject(this._oldSearches);

  saveToLocal(item: number) {
    this.result.next([...this.result.value, item]);
  }
}
