import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UserSettings {
    private _city: string;
    private _country: string;
    private _unitSystem: string;

    constructor(city: string, country: string, unitSystem: string) {
        this._city = city;
        this._country = country;
        this._unitSystem = unitSystem;
    }

    public get unitSystem(): string {
        return this._unitSystem;
    }

    public set unitSystem(value: string) {
        this._unitSystem = value;
    }

    public get city(): string {
        return this._city;
    }

    public set city(value: string) {
        this._city = value;
    }

    public get country(): string {
        return this._country;
    }

    public set country(value: string) {
        this._country = value;
    }


}
