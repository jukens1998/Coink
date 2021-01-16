import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureCodeComponent } from './Components/Login/secure-code/secure-code.component';
import { SecureLoginComponent } from './Components/Login/secure-login/secure-login.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginComponent } from './Pages/login/login.component';
import { PurchasesComponent } from './Pages/purchases/purchases.component';

const routes: Routes = [
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'Coink', component: LoginComponent, children:
      [
        { path: 'Login', component: SecureLoginComponent },
        { path: 'secureCode', component: SecureCodeComponent },
      ]
  },
  { path: 'purchases', component: PurchasesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
