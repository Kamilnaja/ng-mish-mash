import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-connection-error',
    templateUrl: './connectionError.html',
    styleUrls: ['./../../result.css']
})

export class ConnectionErrorComponent {
    @Input() result: object;
}
