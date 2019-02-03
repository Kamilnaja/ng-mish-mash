import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserSettings } from '../models/UserSettings';
import { SearchesService } from '../searches/searches.service';
import { environmentProd as envProd } from '../Utils/Environment.prod';
import { catchError } from 'rxjs/operators';

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

    public requestData(settings: UserSettings) {
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
            this.searchesService.saveToLocalStorage(settings);
        });
    }

    private _handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    }

    private log(message: string) {
        console.log('message');
    }
}
