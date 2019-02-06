import { Component, Input, OnInit } from '@angular/core';
import { FlagsService } from 'src/app/services/Flags.service';
import { ResponseOk } from 'src/app/interfaces/responseOk';

@Component({
    selector: 'app-result-ok',
    templateUrl: './resultOk.html',
    styleUrls: ['./../../result.css']
})

export class ResultOkComponent implements OnInit {
    @Input() result: ResponseOk;
    flagSrc: string;

    constructor(private flagService: FlagsService) { }

    ngOnInit() {
        this.flagService.requestFlag('pl').subscribe(
            res => this.flagSrc = res
        );
    }
}
