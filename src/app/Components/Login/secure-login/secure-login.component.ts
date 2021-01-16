import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-login',
  templateUrl: './secure-login.component.html',
  styleUrls: ['./secure-login.component.css']
})
export class SecureLoginComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  public onSubmit() {
    this.router.navigateByUrl('Coink/secureCode');

  }
}
