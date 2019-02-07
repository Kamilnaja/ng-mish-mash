import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FlagsService } from 'src/app/services/Flags.service';
import { ResponseOk } from 'src/app/interfaces/responseOk';

@Component({
    selector: 'app-result-ok',
    templateUrl: './resultOk.html',
    styleUrls: ['./../../result.css']
})

export class ResultOkComponent implements OnChanges {

    @Input() result: ResponseOk;
    flagSrc: string;

    constructor(private flagService: FlagsService) { }

    ngOnChanges() {
        if (typeof this.result !== 'undefined'
            && this.result.length !== 0
            && this.result.ok !== false) {
            this.getFlag();
        }
    }

    private getFlag() {
        this.flagService.requestFlag(
            this.result.sys.country.toLocaleLowerCase()).subscribe(res => this.flagSrc = res);
    }
}
