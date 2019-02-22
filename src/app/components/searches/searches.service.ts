import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoredUserSettings } from '../../models/StoredUserSettings';
import { UserSettings } from '../../models/UserSettings';
import { LocalStorageService } from '../../services/LocalStorageService';
import { environmentProd } from '../../Utils/Environment.prod';

@Injectable({
  providedIn: 'root'
})

export class SearchesService {
  public result;

  constructor(private storageService: LocalStorageService) {
    this._prepareBehaviourSubject();
  }

  saveNewSearch(newUserSettings: StoredUserSettings) {
    let itemsToSave;

    if (this.storageService.getItem(environmentProd.localStorageKey) == null) {
      itemsToSave = [];
    } else {
      itemsToSave = this.storageService.getParsedItem(environmentProd.localStorageKey);
    }

    // restrict last 10 searches, remove last item and add on the begining
    if (this.result.value.length >= 10) {
      itemsToSave.pop();
    }

    // check duplicates
    this._checkDuplicates(newUserSettings, itemsToSave);
    // convert to StoredUserSettings with uuid
    itemsToSave.unshift(new StoredUserSettings(newUserSettings));

    this._finalizeSave(itemsToSave);
  }

  clearSearches(): void {
    this.storageService.clear(environmentProd.localStorageKey);
    this.result.next([]);
  }

  removeSearch(uuid: number): void {
    const itemsToSave = this.storageService.getParsedItem(environmentProd.localStorageKey);
    //  find wanted item
    const foundIndex = itemsToSave.findIndex(item => item.uuid === uuid);
    itemsToSave.splice(foundIndex, 1);

    this._finalizeSave(itemsToSave);
  }

  private _finalizeSave(itemsToSave: any) {
    this.storageService.save(environmentProd.localStorageKey, itemsToSave);
    this.result.next(this.storageService.getParsedItem(environmentProd.localStorageKey));
  }

  private _checkDuplicates(item: StoredUserSettings, items: any) {
    let foundIndex;

    if (this.storageService.getItem(environmentProd.localStorageKey) !== null) {
      foundIndex = this.storageService.getParsedItem(environmentProd.localStorageKey)
        .findIndex(this.checkIfItemExists(item));
    }
    if (foundIndex !== -1 && foundIndex !== undefined) {
      this._removeDuplicate(foundIndex, items);
    }
  }

  private _removeDuplicate(foundIndex: any, items: any) {
    console.log(`found duplicate on position ${foundIndex}. Attempt to remove this garbage!`);
    items.splice(foundIndex, 1);
  }

  private _prepareBehaviourSubject() {
    if (this.storageService.getItem(environmentProd.localStorageKey) == null) {
      this.result = new BehaviorSubject([]);
    } else {
      this.result = new BehaviorSubject(this.storageService.getParsedItem(environmentProd.localStorageKey));
    }
  }

  private checkIfItemExists(item: UserSettings) {
    return (x: { city: string; country: string; }) => x.city === item.city && x.country === item.country;
  }

}
