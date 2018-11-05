import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ActividadPage } from '../pages/actividad/actividad';
import { DietaPage } from '../pages/dieta/dieta';
import { EntrenadorPage } from '../pages/entrenador/entrenador';
import { EvolucionPage } from '../pages/evolucion/evolucion';
import { LogrosPage } from '../pages/logros/logros';
import { PerfilPage } from '../pages/perfil/perfil';
import { SettingsPage } from '../pages/settings/settings';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { FIREBASE_CONFIG } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ActividadPage,
    DietaPage,
    EntrenadorPage,
    EvolucionPage,
    LogrosPage,
    PerfilPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ActividadPage,
    DietaPage,
    EntrenadorPage,
    EvolucionPage,
    LogrosPage,
    PerfilPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
