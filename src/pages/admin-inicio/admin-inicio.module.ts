import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminInicioPage } from './admin-inicio';

@NgModule({
  declarations: [
    AdminInicioPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminInicioPage),
  ],
})
export class AdminInicioPageModule {}
