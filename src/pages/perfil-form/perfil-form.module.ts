import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilFormPage } from './perfil-form';

@NgModule({
  declarations: [
    PerfilFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilFormPage),
  ],
})
export class PerfilFormPageModule {}
