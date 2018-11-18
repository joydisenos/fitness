import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminEntrenamientosPage } from './admin-entrenamientos';

@NgModule({
  declarations: [
    AdminEntrenamientosPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminEntrenamientosPage),
  ],
})
export class AdminEntrenamientosPageModule {}
