import { OnInit, NgModule } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
export declare class QRCodeComponent implements OnInit {
    private sanitizer;
    data: string;
    size: number;
    src: SafeResourceUrl;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
}
@NgModule()
export declare class QRCodeModule {
}
