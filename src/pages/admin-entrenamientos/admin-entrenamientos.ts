import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarEntrenamientoPage } from '../editar-entrenamiento/editar-entrenamiento';

/**
 * Generated class for the AdminEntrenamientosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-entrenamientos',
  templateUrl: 'admin-entrenamientos.html',
})
export class AdminEntrenamientosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminEntrenamientosPage');
  }

  abrirEditar()
  {
    this.navCtrl.push(EditarEntrenamientoPage);
  }

}
