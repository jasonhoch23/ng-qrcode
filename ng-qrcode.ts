import { NgModule, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'qr-code',
  template: `
    <img [src]="src" [alt]="data" width="{{size}}px" height="{{size}}px">
  `
})
export class QRCodeComponent implements OnInit {

  @Input() data: string;

  @Input() size: number;

  src: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://api.qrserver.com/v1/create-qr-code/?data='
      + this.data
      +'&size='
      + this.size
      + 'x'
      + this.size
      + '&margin=0'
    );
  }

}

@NgModule({
  imports: [CommonModule],
  declarations: [QRCodeComponent]
})
export class QRCodeModule {}