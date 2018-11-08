import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActividadPage } from '../actividad/actividad';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  items: Observable<any[]>;

  ActividadPage = "ActividadPage";

  constructor(
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams) {
    
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid)
      {
        this.items = this.afDatabase.list('actividades/' + data.uid).valueChanges();
      }
      else{
        this.navCtrl.setRoot(LoginPage);
      }
    });
  }
 
  abrirActividad(item) {
    this.navCtrl.push(ActividadPage, {item: item});
  }
}
