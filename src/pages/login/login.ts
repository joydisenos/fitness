import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home'; 

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) 
  {}

  async login(user:User){
    
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email , user.password)
      .then(auth => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch(err => {
        const alert = this.alertCtrl.create({
          title: 'Error de Autenticación!',
          buttons: ['OK']
        });
        alert.present();
      })
    }
  

}
