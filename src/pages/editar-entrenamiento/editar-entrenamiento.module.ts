import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarEntrenamientoPage } from './editar-entrenamiento';
import { SortablejsModule } from 'angular-sortablejs';

@NgModule({
  declarations: [
    EditarEntrenamientoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarEntrenamientoPage),
    SortablejsModule
  ],
})
export class EditarEntrenamientoPageModule {}
