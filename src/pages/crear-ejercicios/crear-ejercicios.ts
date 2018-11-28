import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Generated class for the CrearEjerciciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-ejercicios',
  templateUrl: 'crear-ejercicios.html',
})
export class CrearEjerciciosPage {

  params:any;
  opt = 'ejercicio';
  ejercicio = {};
  ejerciciosList: AngularFireList<any>;
  ejercicios: Observable<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afDatabase: AngularFireDatabase) {
    this.params = navParams.data;
    this.ejerciciosList = this.afDatabase
    .list('ejercicios');
    this.ejercicios = this.ejerciciosList
                          .snapshotChanges()
                          .pipe(
                            map(ejercicios => 
                              ejercicios.map(ejercicio => ({ 
                                key: ejercicio.key, 
                                ...ejercicio.payload.val() }))
                            )
                        );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearEjerciciosPage');
  }

  cambiarPantalla(parametro)
  {
    this.opt = parametro;
  }

  agregarEjercicio(ejercicio)
  {
    this.afDatabase
    .list('actividades/'+ this.params.userKey + '/'+ this.params.actividadKey + '/semana/' + this.params.semanaKey + '/ejercicios')
    .push(ejercicio);
    
    this.afDatabase
    .list('ejercicios')
    .push(ejercicio);

    this.navCtrl.pop();
  }

  registrarEjercicio(item)
  {
    this.afDatabase
    .list('actividades/'+ this.params.userKey + '/'+ this.params.actividadKey + '/semana/' + this.params.semanaKey + '/ejercicios')
    .push(item);

    this.navCtrl.pop();
  }

  agregarDescanso(segundos)
  {
    this.afDatabase
    .list('actividades/'+ this.params.userKey + '/'+ this.params.actividadKey + '/semana/' + this.params.semanaKey + '/ejercicios')
    .push({
      nombre:'descanso',
      tiempo:segundos
    });

    this.navCtrl.pop();
  }


}
