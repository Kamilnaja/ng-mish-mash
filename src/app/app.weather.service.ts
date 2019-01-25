import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeatherEntry } from './model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    private _serverUrl = 'http://api.openweathermap.org';
    constructor(private http: HttpClient) { }

    get data(): Observable<HttpResponse<IWeatherEntry>> {
        return this.http
            .get<IWeatherEntry>(
                this._serverUrl + '/data/2.5/weather?q=Warsaw,pl&APPID=19bdc82416a280ee0d7025c4ae606556&units=metric',
                { observe: 'response' });
    }
}
