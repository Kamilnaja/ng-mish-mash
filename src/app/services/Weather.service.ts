import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environmentProd as envProd } from '../Utils/Environment.prod';

@Injectable({
    providedIn: 'root'
})

export class WeatherService {

    public listItems$: Observable<[]>;
    private _listItems: BehaviorSubject<any>;
    private dataStore: {
        listItems: any;
    };

    constructor(private http: HttpClient) {
        this.dataStore = { listItems: [] };
        this._listItems = new BehaviorSubject<[]>([]);
        this.listItems$ = this._listItems.asObservable();
    }

    public requestData(city?, country?, unitSystem?) {
        const url = `${envProd.baseUrl}?q=${city},${country}&APPID=${envProd.apiKey}&units=${unitSystem}`;
        this.http
            .get(url)
            .subscribe(items => {
                this.dataStore.listItems = items;
                this._listItems.next(items);
            });
    }
}
