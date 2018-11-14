import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Perfil } from '../../models/perfil';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-perfil-form',
  templateUrl: 'perfil-form.html',
})
export class PerfilFormPage {

  perfil: AngularFireObject<Perfil>;
  perfilData =  {};

  constructor(
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      
      console.log(this.perfil);
  }

  ionViewWillLoad()
  {
    this.afAuth.authState.take(1).subscribe( data => {
      if(data && data.email && data.uid)
      {
        this.perfil = this.afDatabase.object('perfil/'+ data.uid);
        this.perfilData = this.perfil.snapshotChanges().subscribe(perfil => {
          console.log(perfil.key)
          this.perfilData = perfil.payload.val();
        });
      }
      else{
        this.navCtrl.setRoot(LoginPage);
      }
    });
    
  }

  crearPerfil(perfilData: Perfil){
    this.afAuth.authState.take(1).subscribe(auth =>{

      this.afDatabase.object('perfil/'+ auth.uid)
                      .set(perfilData)
                      .then(() => this.navCtrl.setRoot(HomePage));

    })
  }

}
