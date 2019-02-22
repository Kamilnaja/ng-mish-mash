import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { ResponseOk } from 'src/app/interfaces/responseOk';
import { FlagsService } from 'src/app/services/Flags.service';
import { IconService } from 'src/app/services/Icons.service';

@Component({
    selector: 'app-result-ok',
    templateUrl: './resultOk.html',
    styleUrls: [
        './../../result.css',
        './resultOk.css'
    ],
    providers: [FlagsService, IconService],
    animations: [
        trigger('openClose', [
            state('open', style({
                opacity: 1
            })),
            state('closed', style({
                opacity: 0
            })),
            transition('closed => open', [
                animate('0.8s')
            ])
        ])
    ]
})

export class ResultOkComponent implements OnChanges, OnDestroy {

    @Input() result: ResponseOk;
    isOpen = false;
    flagSrc: string;

    constructor(private flagService: FlagsService) { }

    ngOnChanges() {
        // result is ok and not from error
        const validateResult = typeof this.result !== 'undefined' && this.result.length !== 0 && this.result.ok !== false;

        if (validateResult) {
            this.getFlag();
            this.isOpen = false;
            setTimeout(() => {
                this.isOpen = true;
            }, 50);
        }
    }

    ngOnDestroy(): void {
        this.isOpen = false;
    }

    private getFlag() {
        this.flagService.requestFlag(
            this.result.sys.country
                .toLocaleLowerCase()).subscribe(res => this.flagSrc = res);
    }
}
