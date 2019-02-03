import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-result-ok',
    templateUrl: './resultOk.html'
})

export class ResultOkComponent {
    @Input() result: object;
}
