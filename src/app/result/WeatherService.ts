import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StoredUserSettings } from '../models/StoredUserSettings';
import { SearchesService } from '../searches/searches.service';
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

    constructor(private http: HttpClient, private searchesService: SearchesService) {
        this.dataStore = { listItems: [] };
        this._listItems = new BehaviorSubject<[]>([]);
        this.listItems$ = this._listItems.asObservable();
    }

    public requestData(settings: StoredUserSettings) {
        const url = `${envProd.baseUrl}?q=${settings.city},${settings.country}&APPID=${envProd.apiKey}&units=${settings.unitSystem}`;
        this.http
            .get(url)
            .subscribe(
                result => {
                    this.dataStore.listItems = result;
                    this._listItems.next(result);
                },
                error => {
                    console.log('error');
                    this.dataStore.listItems = error;
                    this._listItems.next(error);
                },
                () => {
                    console.log('all done');
                }
            );
        setTimeout(() => {
            this.searchesService.saveNewSearch(settings);
        });
    }
}
