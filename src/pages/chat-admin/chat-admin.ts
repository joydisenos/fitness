import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Mensaje } from '../../models/mensaje';
import { map } from 'rxjs/operators';

/**
 * Generated class for the ChatAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-admin',
  templateUrl: 'chat-admin.html',
})
export class ChatAdminPage {

  mensajes: Observable<any[]>;
  mensaje = {} as Mensaje;
  userKey:string;
  usersList:AngularFireList<any>;
  users: Observable<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afDatabase: AngularFireDatabase) {
      this.usersList = this.afDatabase.list('perfil');
      this.users = this.usersList
                  .snapshotChanges()  
                  .pipe(
                          map(users => 
                            users.map(user => ({ 
                              key: user.key, 
                              ...user.payload.val() }))
                          )
                      );
  }


  verMensajes(userKey)
  {
    this.mensajes = this.afDatabase.list('mensajes/' + userKey).valueChanges();
    this.userKey = userKey;
  }

  enviarMensaje(mensaje:Mensaje)
  {

      this.afDatabase.list('mensajes/'+ this.userKey)
                      .push(this.mensaje);
      this.mensaje.mensaje = '';
  }

}
