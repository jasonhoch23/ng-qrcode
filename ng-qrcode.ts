import { NgModule, Component, Input, OnInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as QRious from 'qrious';

@Component({
  selector: 'qr-code',
  template: '<div #container></div>'
})
export class QRCodeComponent implements OnInit, OnChanges {

  @Input() value: string;

  @Input() size: number;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!('value' in changes) || !('size' in changes)) {
      return;
    }

    this.init();
  }

  private init(): void {
    const qr = new QRious({
      value: this.value,
      size: this.size
    });

    this.elementRef.nativeElement.innerHTML = '';
    this.elementRef.nativeElement.appendChild(qr.image);
  }

}

@NgModule({
  exports: [QRCodeComponent],
  declarations: [QRCodeComponent],
  entryComponents: [QRCodeComponent]
})
export class QRCodeModule {}
