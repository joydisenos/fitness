import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SemanasPage } from './semanas';

@NgModule({
  declarations: [
    SemanasPage,
  ],
  imports: [
    IonicPageModule.forChild(SemanasPage),
  ],
})
export class SemanasPageModule {}
