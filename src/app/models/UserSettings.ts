export class UserSettings {
    private _city: string;
    private _country: string;
    private _unitSystem: string;

    constructor() {
        this._city = 'Warsaw';
        this._country = 'pl';
        this._unitSystem = 'metrics';
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
