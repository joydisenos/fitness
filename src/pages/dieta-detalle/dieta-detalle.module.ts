import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DietaDetallePage } from './dieta-detalle';

@NgModule({
  declarations: [
    DietaDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(DietaDetallePage),
  ],
})
export class DietaDetallePageModule {}
