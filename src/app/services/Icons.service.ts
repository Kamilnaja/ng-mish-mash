import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class IconService {
    constructor(private http: HttpClient) { }

    private getIcon() {
        return of();
    }
}
