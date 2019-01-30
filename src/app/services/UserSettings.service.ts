import { Injectable } from '@angular/core';
import { WeatherService } from './Weather.service';
import { IUserSettings } from '../interfaces/IUserSettings';

@Injectable()
export class UserSettingsService {
    private _userSettings: IUserSettings;

    private _city: string;
    private _country: string;
    private _unitSystem: string;

    constructor(public weatherService: WeatherService) { }

    loadAll() {
        this.changeData('warszawa', 'pl', 'metric');
    }

    changeData(city, country, unitSystem) {
        this.weatherService.requestData(city, country, unitSystem);
    }
}
