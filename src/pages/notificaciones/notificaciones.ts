import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**
 * Generated class for the NotificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html',
})
export class NotificacionesPage {
  notificacionesRef:AngularFireList<any>;
  notificaciones:Observable<any>;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public popover: PopoverController,
              public view: ViewController,
              public afAuth: AngularFireAuth,
              public afDatabase: AngularFireDatabase) {

              
          
      this.notificacionesRef = this.afDatabase.list('notificaciones/admin');
      this.notificaciones = this.notificacionesRef.snapshotChanges().pipe(
        map(items => 
          items.map(item => ({ 
            key: item.key, 
            ...item.payload.val() }))
        )
      );
                  
                 
  }

  close()
  {
    this.view.dismiss();
  }

}
