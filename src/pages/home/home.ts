import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { LoginPage } from '../login/login';
import { Perfil } from '../../models/perfil';
import { Observable } from 'rxjs';
import { ActividadPage } from '../actividad/actividad';
import { Item } from '../../models/item';
import { map } from 'rxjs/operators';
import { AdminInicioPage } from '../admin-inicio/admin-inicio';
import { DetallesPage } from '../detalles/detalles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:string = '';
  perfil : AngularFireObject<Perfil>;
  perfilData : Observable<Perfil>;
  itemsRef: AngularFireList<any>;
  items: Observable<Item[]>;


 
  constructor(
    private afDatabase : AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController) {
      this.afAuth.authState.subscribe(data => {
        if(data && data.email && data.uid)
        {
          this.perfil = this.afDatabase.object('perfil/'+data.uid);
          this.perfilData = this.perfil.valueChanges();
          this.perfilData.subscribe(user => {
            if(user.tipo == 'admin')
            {
              this.navCtrl.setRoot(AdminInicioPage);
            }
          } );
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

  abrirEjercicios(item) {
    this.navCtrl.push(DetallesPage , {item: item});
  }

}
