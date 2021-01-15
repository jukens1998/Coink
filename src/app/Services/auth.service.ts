import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticated(): boolean {
    if (1< 2) {
      return false;
    } else {
      return true;
    }

  }
}
