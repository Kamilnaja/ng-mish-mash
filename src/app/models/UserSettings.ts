import { UnitSystem } from './unit-system.enum';

export class UserSettings {
    city: string;
    country: string;
    unitSystem: UnitSystem;

    constructor(city: string, country: string, unitSystem: UnitSystem) {
        this.city = city;
        this.country = country;
        this.unitSystem = unitSystem;
    }
}
