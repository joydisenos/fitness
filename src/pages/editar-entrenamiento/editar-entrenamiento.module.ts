import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarEntrenamientoPage } from './editar-entrenamiento';

@NgModule({
  declarations: [
    EditarEntrenamientoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarEntrenamientoPage),
  ],
})
export class EditarEntrenamientoPageModule {}
