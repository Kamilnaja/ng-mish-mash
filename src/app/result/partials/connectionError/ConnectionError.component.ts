import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-connection-error',
    templateUrl: './connectionError.html'
})

export class ConnectionErrorComponent {
    @Input() result: object;
}
