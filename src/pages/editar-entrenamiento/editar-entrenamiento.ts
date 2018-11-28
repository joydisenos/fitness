import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CrearEjerciciosPage } from '../crear-ejercicios/crear-ejercicios';

/**
 * Generated class for the EditarEntrenamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-entrenamiento',
  templateUrl: 'editar-entrenamiento.html',
})
export class EditarEntrenamientoPage {

  params:any;
  ejerciciosList: AngularFireList<any>;
  ejercicios:Observable<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afDatabase: AngularFireDatabase,
              public modalCtrl: ModalController) {
    this.params = navParams.data;
    this.ejerciciosList = this.afDatabase
    .list('actividades/'+ this.params.userKey + '/'+ this.params.actividadKey + '/semana/' + this.params.semanaKey + '/ejercicios');

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
    console.log(this.params);
  }

  crearEjercicio() {
    const modal = this.modalCtrl.create(CrearEjerciciosPage , this.params);
    modal.present();
  }

}
