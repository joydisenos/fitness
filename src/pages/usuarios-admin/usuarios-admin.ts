import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Generated class for the UsuariosAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuarios-admin',
  templateUrl: 'usuarios-admin.html',
})
export class UsuariosAdminPage {

  buscarCliente = {
    nombre:'',
    objetivo:'',
    estatus:''
  };

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

}

