import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FlagsService } from 'src/app/services/Flags.service';
import { ResponseOk } from 'src/app/interfaces/responseOk';
import { IconService } from 'src/app/services/Icons.service';

@Component({
    selector: 'app-result-ok',
    templateUrl: './resultOk.html',
    styleUrls: [
        './../../result.css'
    ],
    providers: [FlagsService, IconService]
})

export class ResultOkComponent implements OnChanges {

    @Input() result: ResponseOk;
    flagSrc: string;
    constructor(private flagService: FlagsService, private iconsService: IconService) { }

    ngOnChanges() {
        // result is ok and not from error
        const validateResult = typeof this.result !== 'undefined' && this.result.length !== 0 && this.result.ok !== false;
        if (validateResult) {
            this.getFlag();
        }
    }

    private getFlag() {
        this.flagService.requestFlag(
            this.result.sys.country.toLocaleLowerCase()).subscribe(res => this.flagSrc = res);
    }
}
