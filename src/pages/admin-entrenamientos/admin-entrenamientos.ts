import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarEntrenamientoPage } from '../editar-entrenamiento/editar-entrenamiento';
import { Item } from '../../models/item';
import { Ejercicio } from '../../models/ejercicio';
import { Semana } from '../../models/semana';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  actividad:AngularFireObject<Item>;
  semanasList: AngularFireList<any>;
  semanas:Observable<any>;
  params:any;  
  semana:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afDatabase: AngularFireDatabase) {
    this.params = navParams.data;
    this.actividad = this.afDatabase.object('actividades/'+ this.params.userKey);
    this.semanasList = this.afDatabase
                  .list('actividades/'+ this.params.userKey + '/'+ this.params.actividadKey + '/semana');

    this.semanas = this.semanasList
          .snapshotChanges()  
          .pipe(
                  map(semanas => 
                    semanas.map(semana => ({ 
                      key: semana.key, 
                      ...semana.payload.val() }))
                  )
              );

  }

  ionViewDidLoad() {
    console.log(this.params);
  }

  abrirEditar(semanaKey)
  {
    this.params.semanaKey = semanaKey;

    this.navCtrl.push(EditarEntrenamientoPage, this.params);
  }

  agregarSemana(semana)
  {
    this.afDatabase
    .list('actividades/'+ this.params.userKey + '/'+ this.params.actividadKey + '/semana')
    .push({
      nombre:semana
    });
  }

}
