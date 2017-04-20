# Angular QR code generator
Easy to use AOT compatible QR code generator for your Angular (not compatible with AngularJS) project. This also works with Angular 4 aswell as Ionic 2 and Ionic 3. Tested on Mac, Windows, iOS and Android.

## Install
    npm install ng-qrcode --save

## Usage
```
import { QRCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    QRCodeModule
  ]
})
```
```
<qr-code [value]="'Yo world!'" [size]="300"></qr-code>
```
