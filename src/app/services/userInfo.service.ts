import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserInfoService {
    private dataSource = new BehaviorSubject('default data');
    currentData = this.dataSource.asObservable();

    constructor() { }

    changeData(data: string) {
        this.dataSource.next(data);
    }
}
