import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearEjerciciosPage } from './crear-ejercicios';

@NgModule({
  declarations: [
    CrearEjerciciosPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearEjerciciosPage),
  ],
})
export class CrearEjerciciosPageModule {}
