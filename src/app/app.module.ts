import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { SecureLoginComponent } from './Components/Login/secure-login/secure-login.component';
import { SecureCodeComponent } from './Components/Login/secure-code/secure-code.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecureLoginComponent,
    SecureCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
