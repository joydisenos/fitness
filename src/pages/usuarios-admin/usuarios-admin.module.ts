import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuariosAdminPage } from './usuarios-admin';

@NgModule({
  declarations: [
    UsuariosAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuariosAdminPage),
  ],
})
export class UsuariosAdminPageModule {}
