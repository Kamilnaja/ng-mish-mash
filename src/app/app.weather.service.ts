import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeatherEntry } from './model';
import { Observable } from 'rxjs';
import { UserSettings } from './models/UserSettings';
import { environmentProd as envProd } from './Utils/Environment.prod';

@Injectable({
    providedIn: 'root'
})

export class WeatherService {

    constructor(private http: HttpClient, private userConf: UserSettings) {
        this.userConf = new UserSettings();
    }

    get data(): Observable<HttpResponse<IWeatherEntry>> {
        return this.http
            .get<IWeatherEntry>(
                // tslint:disable-next-line:max-line-length
                `${envProd.baseUrl}/data/2.5/weather?q=${this.userConf.city},${this.userConf.country}l&APPID=${envProd.apiKey}&units=metric`,
                { observe: 'response' });
    }
}
