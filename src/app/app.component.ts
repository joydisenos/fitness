import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { DietaPage } from '../pages/dieta/dieta';
import { ChatPage } from '../pages/chat/chat';
import { LogrosPage } from '../pages/logros/logros';
import { PerfilFormPage } from '../pages/perfil-form/perfil-form';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Perfil } from '../models/perfil';
import { ParametrosPage } from '../pages/parametros/parametros';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  perfil : AngularFireObject<Perfil>;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Entrenamiento', component: HomePage },
      { title: 'Dieta Programada', component: DietaPage },
      { title: 'Mi Entrenador', component: ChatPage },
      { title: 'Logros', component: LogrosPage },
      { title: 'Parametros', component: ParametrosPage },      
      { title: 'Actividades', component: ListPage },
      { title: 'Perfil', component: PerfilFormPage }
    ];

    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid)
      {
        this.perfil = this.afDatabase.object('perfil/'+data.uid);
      }
      else{
        this.nav.setRoot(LoginPage);
      }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logOut()
  {
    this.afAuth.auth.signOut()
    .then(() => this.nav.setRoot(LoginPage));
  }
}
