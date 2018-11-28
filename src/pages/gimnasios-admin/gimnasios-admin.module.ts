import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GimnasiosAdminPage } from './gimnasios-admin';

@NgModule({
  declarations: [
    GimnasiosAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(GimnasiosAdminPage),
  ],
})
export class GimnasiosAdminPageModule {}
