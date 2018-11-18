import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminEntrenamientosPage } from '../admin-entrenamientos/admin-entrenamientos';

/**
 * Generated class for the AdminInicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-inicio',
  templateUrl: 'admin-inicio.html',
})
export class AdminInicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminInicioPage');
  }

  abrirEjercicio()
  {
    this.navCtrl.push(AdminEntrenamientosPage);
  }

}
