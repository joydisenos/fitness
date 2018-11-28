import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Perfil } from '../../models/perfil';
import { map } from 'rxjs/operators';
import { LoginPage } from '../login/login';
import { ActividadPage } from '../actividad/actividad';


@IonicPage()
@Component({
  selector: 'page-semanas',
  templateUrl: 'semanas.html',
})
export class SemanasPage {

  itemKey:string;
  user:string = '';
  perfil : AngularFireObject<Perfil>;
  perfilData : Observable<Perfil>;
  itemsRef: AngularFireList<any>;
  items: Observable<Item[]>;
  ejercicioRef:AngularFireObject<any>;
  ejercicio:Observable<any>;
  params = {
    itemKey:'',
    ejercicioKey:''
  };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afAuth: AngularFireAuth,
              public afDatabase: AngularFireDatabase) {
    this.itemKey = navParams.get('item');

    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid)
      {

        this.perfil = this.afDatabase.object('perfil/'+data.uid);
        this.perfilData = this.perfil.valueChanges();

        this.ejercicioRef = this.afDatabase.object('actividades/' + data.uid + '/' + this.itemKey);
        this.ejercicio = this.ejercicioRef.valueChanges();

        this.itemsRef = this.afDatabase.list('actividades/' + data.uid + '/' + this.itemKey + '/semana');
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SemanasPage');
  }

  abrirEjercicios(item)
  {
    this.params.itemKey = item;
    this.params.ejercicioKey = this.itemKey;
    this.navCtrl.push(ActividadPage, this.params);
  }

}
