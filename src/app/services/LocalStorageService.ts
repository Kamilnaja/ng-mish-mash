import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {

    save(item: string, data: Object) {
        return localStorage.setItem(item, JSON.stringify(data));
    }

    getParsedItem(item: string) {
        return JSON.parse(this.getItem(item));
    }

    getItem(item: string) {
        return localStorage.getItem(item);
    }

    clear(item: string) {
        localStorage.removeItem(item);
    }

}
