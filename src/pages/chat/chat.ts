import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { LoginPage } from '../login/login';
import { Mensaje } from '../../models/mensaje';
import { Perfil } from '../../models/perfil';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  mensajes: Observable<any[]>;
  mensaje = {} as Mensaje;
  perfil : AngularFireObject<Perfil>;
  perfilData : Observable<Perfil>;

  constructor(
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.afAuth.authState.subscribe(data => {
        if(data && data.email && data.uid)
        {
          this.mensajes = this.afDatabase.list('mensajes/' + data.uid).valueChanges();
          this.perfil = this.afDatabase.object('perfil/'+data.uid);
          this.perfilData = this.perfil.valueChanges();
          console.log(this.perfil);
        }
        else{
          this.navCtrl.setRoot(LoginPage);
        }
      });
  }

  enviarMensaje(mensaje:Mensaje)
  {
    this.afAuth.authState.subscribe(auth =>{

      this.afDatabase.list('mensajes/'+ auth.uid)
                      .push(this.mensaje);
      this.mensaje.mensaje = '';

    })
  }


}
