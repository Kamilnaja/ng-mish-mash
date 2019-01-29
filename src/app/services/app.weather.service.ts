import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeatherEntry } from '../model';
import { Observable } from 'rxjs';
import { UserSettings } from '../models/UserSettings';
import { environmentProd as envProd } from '../Utils/Environment.prod';

@Injectable({
    providedIn: 'root'
})

export class WeatherService {

    constructor(private http: HttpClient, private _userSettings: UserSettings) {
        this._userSettings = new UserSettings();
    }

    get data(): Observable<HttpResponse<IWeatherEntry>> {
        const userChoose = `${this._userSettings.city},${this._userSettings.country}`;

        return this.http.get<IWeatherEntry>(
            `${envProd.baseUrl}?q=${userChoose}l&APPID=${envProd.apiKey}&units=${this._userSettings.unitSystem}`,
            { observe: 'response' });
    }
}
