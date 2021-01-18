import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-code',
  templateUrl: './secure-code.component.html',
  styleUrls: ['./secure-code.component.css']
})
export class SecureCodeComponent implements OnInit {
  
  formulario: FormGroup;



  constructor(private router: Router, private fb: FormBuilder) { this.createForm() }
  ngOnInit(): void {
  }


  /*------------------- Create Form ------------ */
  createForm() {
    this.formulario = this.fb.group({
      codigo: ['', Validators.required],
    });
  }

  /*------------------- Login ------------ */

  public secureCode() {
   
    this.router.navigate(['purchases']);
  }
  /*------------------- Visual Validators ------------ */
  get codigoNovalido() {
    return this.formulario.get('codigo').invalid && this.formulario.get('codigo').touched;
  }
}
