import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

/**
 * Generated class for the EjercicioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ejercicio',
  templateUrl: 'ejercicio.html'
})
export class EjercicioComponent {

  text: string;

  constructor(private modalCtrl: ModalController,
    public navCtrl: NavController) {
    console.log('Hello EjercicioComponent Component');
    this.text = 'Hello World';
  }

  cerrar()
  {
    this.navCtrl.pop();
  }

}
