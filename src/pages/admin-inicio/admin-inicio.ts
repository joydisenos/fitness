import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AdminEntrenamientosPage } from '../admin-entrenamientos/admin-entrenamientos';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChatAdminPage } from '../chat-admin/chat-admin';
import { UsuariosAdminPage } from '../usuarios-admin/usuarios-admin';
import { ConfigAdminPage } from '../config-admin/config-admin';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { CrearEntrenamientoPage } from '../crear-entrenamiento/crear-entrenamiento';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-admin-inicio',
  templateUrl: 'admin-inicio.html',
})
export class AdminInicioPage {

  usersList:AngularFireList<any>;
  users: Observable<any>;

  actividadesList:AngularFireList<any>;
  actividades: Observable<any>;
  actividadesPri:any;

  actividadKey:string ='';
  userKey:string ='';

  params = {
    actividadKey: "",
    userKey:""
  }

  arreglo:any;

  filters = {}

  entrenamiento = '';

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             public afDatabase: AngularFireDatabase,
             public popover: PopoverController) {

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

  setVariable()
  {
    this.actividadesPri = this.actividades;
  }

  seleccionarUsuario(user)
  {
    this.actividadesList = this.afDatabase.list('actividades/'+ user.key);
    this.actividades = this.actividadesList
                            .snapshotChanges()
                            .pipe(
                                  map(
                                    actividades => actividades.map(actividad => ({
                                        key: actividad.key,
                                        ...actividad.payload.val()
                                    }))
                                  )
                            );
                                   
    this.userKey = user.key;
    this.params.userKey = user.key;
    this.setVariable();
  }

  abrirEjercicio(actividadKey)
  {
    this.params.actividadKey = actividadKey;
    this.navCtrl.push(AdminEntrenamientosPage , this.params);
  }

  //Navegación header

  chatPage()
  {
    this.navCtrl.push(ChatAdminPage);
  }

  usuariosPage()
  {
    this.navCtrl.push(UsuariosAdminPage);
  }

  settingsPage()
  {
    this.navCtrl.push(ConfigAdminPage);
  }

  notificacionesPage()
  {
    this.popover.create(NotificacionesPage).present();
  }

  crearEntrenamiento()
  {
    this.popover.create(CrearEntrenamientoPage , {user:this.userKey}).present();
  }

}
