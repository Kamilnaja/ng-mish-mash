import { WeatherEntry } from './model';
import sampleEntry from './data/weatherEntry.json';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    private _data: WeatherEntry = sampleEntry;

    get data() {
        return this._data;
    }

    setData(data: WeatherEntry) {
        this._data = data;
    }
}
