import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigAdminPage } from './config-admin';

@NgModule({
  declarations: [
    ConfigAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigAdminPage),
  ],
})
export class ConfigAdminPageModule {}
