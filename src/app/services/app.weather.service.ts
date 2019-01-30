import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeatherEntry } from '../model';
import { UserSettings } from '../models/UserSettings';
import { environmentProd as envProd } from '../Utils/Environment.prod';
import { IUserSettings } from '../interfaces/IUserSettings';

@Injectable({
    providedIn: 'root'
})

export class WeatherService {

    constructor(private http: HttpClient, private _userSettings: UserSettings) {
        this._userSettings = new UserSettings();
        setInterval(() => {
            this.requestData();
        }, 2000);
    }

    _userChoose(newSettings) {
        // console.log(newSettings);
        this._userSettings.city = newSettings.city;
        this._userSettings.country = newSettings.country;
        this._userSettings.unitSystem = newSettings.unitSystem;
        this.requestData(newSettings);
    }

    get userChoose() {
        return this._userSettings;
    }

    public requestData(newSettings?: IUserSettings): Observable<HttpResponse<IWeatherEntry>> {
        console.log('running');
        const userChoose = `${this._userSettings.city},${this._userSettings.country}`;

        return this.http.get<IWeatherEntry>(
            `${envProd.baseUrl}?q=${userChoose}l&APPID=${envProd.apiKey}&units=${this._userSettings.unitSystem}`,
            { observe: 'response' });
    }
}
