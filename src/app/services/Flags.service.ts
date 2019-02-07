import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FlagsService {
    constructor(private http: HttpClient) { }

    requestFlag(countryName: string): Observable<string> {
        return of(`./assets/svg-country-flags/png100px/${countryName}.png`);
    }
}
