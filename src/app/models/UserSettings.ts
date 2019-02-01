import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UserSettings {
    city: string;
    country: string;
    unitSystem: string;

    constructor(city: string, country: string, unitSystem: string) {
        this.city = city;
        this.country = country;
        this.unitSystem = unitSystem;
    }
}
