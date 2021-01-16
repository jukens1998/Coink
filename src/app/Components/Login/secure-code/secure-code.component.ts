import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-code',
  templateUrl: './secure-code.component.html',
  styleUrls: ['./secure-code.component.css']
})
export class SecureCodeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public  onSubmit() {
    this.router.navigateByUrl('purchases');

  }

}
