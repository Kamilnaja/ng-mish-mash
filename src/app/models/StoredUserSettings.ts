import { Injectable } from '@angular/core';
import { UserSettings } from './UserSettings';

@Injectable({
    providedIn: 'root'
})

export class StoredUserSettings extends UserSettings {
    public uuid: number;

    constructor(userSettings: UserSettings) {
        super(userSettings.city, userSettings.country, userSettings.unitSystem);
        this.uuid = new Date().valueOf();
    }
}
