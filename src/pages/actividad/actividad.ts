import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Item } from '../../models/item';
import { Ejercicio } from '../../models/ejercicio';
import { HomePage } from '../home/home';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Generated class for the ActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actividad',
  templateUrl: 'actividad.html',
})
export class ActividadPage {

  item :any;
  
  itemKey: string;
  ejercicioKey:string;
  itemsRef: AngularFireList<any>;
  items: Observable<Item[]>;
  ejercicioRef:AngularFireObject<any>;
  ejercicios:Observable<any>;

  // var cronometro

  public centesimas: number = 0;
  public minutos: number = 59;
  public segundos: number = 0;
  public contador: any;

  public _centesimas: string = '00';
  public _minutos: string = '00';
  public _segundos: string = '00';

  isRun = true;
  estado: string = 'play';
  refreshColor = 'light';

  // end var cronometro

  @ViewChild(Slides) slides: Slides;

  constructor(
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.item = navParams.data;

      this.itemKey = this.item.itemKey;
      this.ejercicioKey = this.item.ejercicioKey;

      console.log(this.itemKey);
      this.start();

      this.afAuth.authState.subscribe(data => {
        if(data && data.email && data.uid)
        {

          this.itemsRef = this.afDatabase.list('actividades/' + data.uid + '/' + this.ejercicioKey + '/semana/'+ this.itemKey);
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

  slideChanged(){
    let currentIndex = this.slides;

    if(currentIndex.isEnd())
      {
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('e-card').style.display = 'block';
      }else{
        document.getElementById('btn-next').style.display = 'block';
        document.getElementById('e-card').style.display = 'none';
      }
  }

  slideNext()
  {
    this.slides.slideNext();
  }

  completarActividad()
  {

    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid)
      {
        this.afDatabase.object('actividades/' + data.uid + '/' + this.ejercicioKey + '/semana/'+ this.itemKey)
                        .update({
                          finalizado: true,
                          tiempo: this._minutos + ':' + this._segundos
                        });
      }
      else{
        this.navCtrl.setRoot(LoginPage);
      }
    });

    this.navCtrl.setRoot(HomePage);
  }

  //Cronometro

  estadoSwap() {
    this.isRun = !this.isRun;
    if (this.isRun) {
      this.estado = 'pause';
      this.refreshColor = 'gris';
      this.start();
    } else {
      this.estado = 'play';
      this.refreshColor = 'light';
      this.pause();
    }

  }

  start() {

    this.contador = setInterval(() => {
      this.centesimas += 1;
      if (this.centesimas < 10) this._centesimas = '0' + this.centesimas;
      else this._centesimas = '' + this.centesimas;
      if (this.centesimas == 10) {
        this.centesimas = 0;
        this.segundos += 1;
        if (this.segundos < 10) this._segundos = '0' + this.segundos;
        else this._segundos = this.segundos + '';
        if (this.segundos == 60) {
          this.segundos = 0;
          this.minutos += 1;
          if (this.minutos < 10) this._minutos = '0' + this.minutos;
          else this._minutos = this.minutos + '';
          this._segundos = '00';
          if (this.minutos == 90) {
            this.pause();
          }
        }
      }
    }, 100)
  }

  pause() {
    clearInterval(this.contador);
  }

  stop() {

    if (!this.isRun) {
      clearInterval(this.contador);
      this.minutos = 0;
      this.segundos = 0;
      this.centesimas = 0;

      this._centesimas = '00';
      this._segundos = '00';
      this._minutos = '00';

      this.estado = 'play';
      this.isRun = false;
      this.contador = null;
    }

  }

}
