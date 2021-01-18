import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-login',
  templateUrl: './secure-login.component.html',
  styleUrls: ['./secure-login.component.css']
})
export class SecureLoginComponent implements OnInit {

  formulario: FormGroup;



  constructor(private router: Router, private fb: FormBuilder) { this.createForm() }
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

  public login() {
   
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
