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
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { PerfilFormPage } from '../pages/perfil-form/perfil-form';
import { ChatPage } from '../pages/chat/chat';
import { AdminInicioPage } from '../pages/admin-inicio/admin-inicio';
import { ParametrosPage } from '../pages/parametros/parametros';
import { DetallesPage } from '../pages/detalles/detalles';
import { DietaDetallePage } from '../pages/dieta-detalle/dieta-detalle';
import { EjercicioComponent } from '../components/ejercicio/ejercicio';
import { AdminEntrenamientosPage } from '../pages/admin-entrenamientos/admin-entrenamientos';
import { EditarEntrenamientoPage } from '../pages/editar-entrenamiento/editar-entrenamiento';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { RegistroPage } from '../pages/registro/registro';
import { CrearEjerciciosPage } from '../pages/crear-ejercicios/crear-ejercicios';
import { SortablejsModule } from 'angular-sortablejs';
import { ChatAdminPage } from '../pages/chat-admin/chat-admin';
import { UsuariosAdminPage } from '../pages/usuarios-admin/usuarios-admin';
import { ConfigAdminPage } from '../pages/config-admin/config-admin';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { Data } from '../providers/data/data';
import { SemanasPage } from '../pages/semanas/semanas';
import { CrearEntrenamientoPage } from '../pages/crear-entrenamiento/crear-entrenamiento';

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
    SettingsPage,
    PerfilFormPage,
    ChatPage,
    AdminInicioPage,
    ParametrosPage,
    DetallesPage,
    DietaDetallePage,
    EjercicioComponent,
    AdminEntrenamientosPage,
    EditarEntrenamientoPage,
    UsuariosPage,
    RegistroPage,
    CrearEjerciciosPage,
    ChatAdminPage,
    UsuariosAdminPage,
    ConfigAdminPage,
    NotificacionesPage,
    SemanasPage,
    CrearEntrenamientoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SortablejsModule.forRoot({ animation: 150 })
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
    SettingsPage,
    PerfilFormPage,
    ChatPage,
    AdminInicioPage,
    ParametrosPage,
    DetallesPage,
    DietaDetallePage,
    EjercicioComponent,
    AdminEntrenamientosPage,
    EditarEntrenamientoPage,
    UsuariosPage,
    RegistroPage,
    CrearEjerciciosPage,
    ChatAdminPage,
    UsuariosAdminPage,
    ConfigAdminPage,
    NotificacionesPage,
    SemanasPage,
    CrearEntrenamientoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Data
  ]
})
export class AppModule {}
