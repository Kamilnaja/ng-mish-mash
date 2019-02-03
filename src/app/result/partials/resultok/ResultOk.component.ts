import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-result-ok',
    templateUrl: './resultOk.html',
    styleUrls: ['./../../result.css']
})

export class ResultOkComponent {
    @Input() result: object;
}
