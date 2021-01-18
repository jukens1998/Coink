import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../Auth/auth.service';
import { CryptoService } from '../CryptoService/crypto.service';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  private url = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private cryptoService: CryptoService, private router: Router, private auth: AuthService) { }



  // LOGIN*************************************
  purchase(vault_id, filter_field, filter_value, begin_date, end_date, page, items_per_page) {
    var purchasesFilters = {
      'user_mail': '',
      'user_password': ''
    };
    let data = JSON.stringify(purchasesFilters);

    const authData = this.cryptoService.encrypt(data);

    const opts = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.auth.readToken(),
      })
    };
    return this.http.post(
      `${this.url}/pockets/reports/transactions/purchases?apiKey=252156`,
      authData, opts
    );
  }

  purchaseExport(vault_id, filter_field, filter_value, begin_date, end_date) {
    var purchasesFilters = {
      'vault_id': vault_id,
      'filter_field': filter_field,
      'filter_value': filter_value,
      'begin_date': begin_date,
      'end_date': end_date
    };
    let data = JSON.stringify(purchasesFilters);

    const authData = this.cryptoService.encrypt(data);

    const opts = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.auth.readToken(),
      })
    };
    return this.http.post(
      `${this.url}/pockets/reports/transactions/purchases/export?apiKey=252156`,
      authData, opts
    ).pipe(
      map(resp => {
        let decryptedResp = this.cryptoService.decrypt(resp.toString());
        return decryptedResp;
      })
    );
  }
}
