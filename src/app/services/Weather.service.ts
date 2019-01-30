import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeatherEntry } from '../models/model';
import { environmentProd as envProd } from '../Utils/Environment.prod';

@Injectable({
    providedIn: 'root'
})

export class WeatherService {

    constructor(private http: HttpClient) { }

    public requestData(city?, country?, unitSystem?): Observable<HttpResponse<IWeatherEntry>> {
        const userChoose = `${city},${country}`;

        return this.http.get<IWeatherEntry>(
            `${envProd.baseUrl}?q=${userChoose}l&APPID=${envProd.apiKey}&units=${unitSystem}`,
            { observe: 'response' });
    }
}
