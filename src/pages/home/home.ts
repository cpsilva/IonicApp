import { ConfigPage } from './../config/config';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onConfig(){
    this.navCtrl.push(ConfigPage);
  }

}
