import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserSettings } from '../models/UserSettings';

@Injectable()
export class UserDataService {
    [x: string]: any;

    _userSettingsDto = new UserSettings();

    private dataSource = new BehaviorSubject(this._userSettingsDto);
    currentData = this.dataSource.asObservable();

    changeData(settings) {
        this.dataSource.next(settings);
    }
}
