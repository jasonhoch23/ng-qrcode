import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'qr-code'
})
export class QRCodeComponent implements OnInit {

  @Input() data: string;

  @Input() size: number;

  constructor() {}

  ngOnInit() {
    console.log(this.data, this.size);
  }

}
