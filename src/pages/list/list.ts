import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActividadPage } from '../actividad/actividad';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../../models/item';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  itemsRef: AngularFireList<any>;
  items: Observable<Item[]>;

  ActividadPage = "ActividadPage";

  constructor(
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams) {
    
      this.afAuth.authState.subscribe(data => {
        if(data && data.email && data.uid)
        {
          this.itemsRef = this.afDatabase.list('actividades/' + data.uid);
          this.items = this.itemsRef.snapshotChanges().pipe(
            map(items => 
              items.map(item => ({ 
                key: item.key, 
                ...item.payload.val() }))
            )
          );
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
