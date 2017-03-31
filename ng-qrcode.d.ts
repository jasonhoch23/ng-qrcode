import { OnInit, ElementRef, OnChanges, SimpleChanges, NgModule } from '@angular/core';
export declare class QRCodeComponent implements OnInit, OnChanges {
    private elementRef;
    value: string;
    size: number;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private init();
}
@NgModule()
export declare class QRCodeModule {
}
