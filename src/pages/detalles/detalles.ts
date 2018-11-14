import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ejercicio } from '../../models/ejercicio';
import { Item } from '../../models/item';
import { ActividadPage } from '../actividad/actividad';

/**
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {

  item = { } as Item;
  ejercicios: Array<Ejercicio>;
  itemKey: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.ejercicios = this.item.ejercicios;
    this.itemKey = this.item.key;
  }

  comenzarEjercicios(item) {
    this.navCtrl.push(ActividadPage, {item: item});
  }

}
