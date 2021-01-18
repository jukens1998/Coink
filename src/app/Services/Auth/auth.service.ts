import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { CryptoService } from '../CryptoService/crypto.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.apiUrl}/auth`;
  userToken: string;
  expiresAt: string;

  constructor(private http: HttpClient, private cryptoService: CryptoService, private router: Router,) {

  }


  // LOGIN*************************************
  login(usuario, contraseña) {
    var Credentials = {
      'user_mail': '',
      'user_password': ''
    };
    let data = JSON.stringify(Credentials);

    const authData = this.cryptoService.encrypt(data);

    const opts = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.readToken(),
      })
    };
    return this.http.post(
      `${this.url}/login?apiKey=252156`,
      authData, opts
    ).pipe(
      map(resp => {
        this.saveToken(resp['access_token']);

        // redirect when the http reques is succesful
        // this.router.navigate(['Coink/secureCode']);
        return resp;
      })
    );

  }

  // SAVETOKEN*************************************
  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  // READTOKEN*************************************
  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
      return this.userToken;
    } else {
      this.userToken = '';
      return false;
    }
  }

  // LOGOUT*************************************
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  }

  authenticated(): boolean {
    if (this.userToken.length < 2) {
      return false;
    } else {
      return true;
    }

  }
}
