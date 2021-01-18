import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-secure-login',
  templateUrl: './secure-login.component.html',
  styleUrls: ['./secure-login.component.css']
})
export class SecureLoginComponent implements OnInit {

  formulario: FormGroup;



  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService) { this.createForm() }
  ngOnInit(): void {
  }


  /*------------------- Create Form ------------ */
  createForm() {
    this.formulario = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  /*------------------- Login ------------ */

  public login(form: NgForm) {
    if (form.invalid) { return; }

    this.auth.login(this.formulario.get('usuario').value, this.formulario.get('contrasena').value);
    this.router.navigate(['Coink/secureCode']);
  }
  /*------------------- Visual Validators ------------ */
  get nombreNovalido() {
    return this.formulario.get('usuario').invalid && this.formulario.get('usuario').touched;
  }
  get contrasenaNovalido() {
    return this.formulario.get('contrasena').invalid && this.formulario.get('contrasena').touched;
  }

}
