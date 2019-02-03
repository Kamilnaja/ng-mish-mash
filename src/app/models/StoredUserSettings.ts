import { Injectable } from '@angular/core';
import { UserSettings } from './UserSettings';

@Injectable({
    providedIn: 'root'
})

export class StoredUserSettings extends UserSettings {
    public uuid;

    constructor(userSettings: UserSettings) {
        super(userSettings.city, userSettings.country, userSettings.unitSystem);
        this.uuid = new Date().valueOf();
    }
}
