import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DietaDetallePage } from '../dieta-detalle/dieta-detalle';

/**
 * Generated class for the DietaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dieta',
  templateUrl: 'dieta.html',
})
export class DietaPage {
  items = ['Dieta baja en calorías','Frutas'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DietaPage');
  }

  abrirDetalle(i:any)
  {
    this.navCtrl.push(DietaDetallePage, {i : i});
  }

}
