import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Ejercicio } from '../../models/ejercicio';
import { Item } from '../../models/item';
import { ActividadPage } from '../actividad/actividad';
import { EjercicioComponent } from '../../components/ejercicio/ejercicio';

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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController) {
    this.item = navParams.get('item');
    this.ejercicios = this.item.ejercicios;
    this.itemKey = this.item.key;
  }

  comenzarEjercicios(item) {
    this.navCtrl.push(ActividadPage, {item: item});
  }

  detalles()
  {
    let profileModal = this.modalCtrl.create( EjercicioComponent);
   profileModal.present();
  }

  cerrar()
  {
    let profileModal = this.modalCtrl.create( EjercicioComponent);
   profileModal.dismiss();
  }
}
