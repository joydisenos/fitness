import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { PerfilFormPage } from '../perfil-form/perfil-form';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Perfil } from '../../models/perfil';
import { LoginPage } from '../login/login';
import { Observable } from 'rxjs';

/** 
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  perfil: AngularFireObject<Perfil>;
  perfilData: Observable<Perfil>;

  constructor(
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      
  }

  ionViewWillLoad()
  {
    this.afAuth.authState.take(1).subscribe( data => {
      if(data && data.email && data.uid)
      {
        this.perfil = this.afDatabase.object('perfil/'+ data.uid);
        this.perfilData = this.perfil.valueChanges();
      }
      else{
        this.navCtrl.setRoot(LoginPage);
      }
    });
    
  }

  actualizarPerfil(perfilData)
  {
    this.navCtrl.push(PerfilFormPage);
  }

}
