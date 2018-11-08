import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Perfil } from '../../models/perfil';
import { PerfilPage } from '../perfil/perfil';

@IonicPage()
@Component({
  selector: 'page-perfil-form',
  templateUrl: 'perfil-form.html',
})
export class PerfilFormPage {

  perfil = {} as Perfil;
  
  constructor(
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  crearPerfil(perfil: Perfil){
    this.afAuth.authState.take(1).subscribe(auth =>{

      this.afDatabase.object('perfil/'+ auth.uid)
                      .set(this.perfil)
                      .then(() => this.navCtrl.setRoot(PerfilPage));

    })
  }

}
