import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Item } from '../../models/item';
import { Ejercicio } from '../../models/ejercicio';

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

  item = {} as Item;
  ejercicios: Array<Ejercicio>;

  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.item = navParams.get('item');
      this.ejercicios = this.item.ejercicios;
      console.log(this.item.ejercicios);
  }

}
