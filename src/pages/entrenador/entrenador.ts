import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the EntrenadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrenador',
  templateUrl: 'entrenador.html',
})
export class EntrenadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  abrirChat()
  {
    this.navCtrl.push(ChatPage);
  }

}
