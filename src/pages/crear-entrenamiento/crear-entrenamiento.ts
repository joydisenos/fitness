import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Entrenamiento } from '../../models/entrenamiento';

/**
 * Generated class for the CrearEntrenamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-entrenamiento',
  templateUrl: 'crear-entrenamiento.html',
})
export class CrearEntrenamientoPage {

  entrenamiento = {} as Entrenamiento;

  data:any;
  userKey:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afDatabase: AngularFireDatabase) {

    this.data = this.navParams.data;
    this.userKey = this.data.user;
    console.log(this.data.user);

  }

  crearEntrenamiento()
  {
    this.afDatabase
    .list('actividades/'+ this.data.user)
    .push(this.entrenamiento);
    this.navCtrl.pop();
  }

}
