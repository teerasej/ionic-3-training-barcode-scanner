import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeText = "";
  barcodeFormat = "";

  constructor(public navCtrl: NavController, public scanner : BarcodeScanner) {

  }

  startScan() {
    this.scanner.scan().then(
      (resultData) => {
        this.barcodeText = resultData.text;
        this.barcodeFormat = resultData.format;
      }
    )
  }

}
