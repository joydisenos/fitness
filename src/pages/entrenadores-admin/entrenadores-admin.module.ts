import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntrenadoresAdminPage } from './entrenadores-admin';

@NgModule({
  declarations: [
    EntrenadoresAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(EntrenadoresAdminPage),
  ],
})
export class EntrenadoresAdminPageModule {}
