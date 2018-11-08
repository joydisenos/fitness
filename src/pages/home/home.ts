import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { LoginPage } from '../login/login';
import { Perfil } from '../../models/perfil';
import { Observable } from 'rxjs';
import { ActividadPage } from '../actividad/actividad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:string = '';
  perfil : AngularFireObject<Perfil>;
  perfilData : Observable<Perfil>;
  items: Observable<any[]>;


 
  constructor(
    private afDatabase : AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController) {
      this.afAuth.authState.subscribe(data => {
        if(data && data.email && data.uid)
        {
          this.perfil = this.afDatabase.object('perfil/'+data.uid);
          this.perfilData = this.perfil.valueChanges();
          this.items = this.afDatabase.list('actividades/' + data.uid).valueChanges();
        }
        else{
          this.navCtrl.setRoot(LoginPage);
        }
      });
  }

  abrirEjercicios(item) {
    this.navCtrl.push(ActividadPage , {item: item});
  }

}
