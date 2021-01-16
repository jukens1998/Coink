import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  data: any[] = []
  element = {
    'nombre': 'pepe',
    'apellido': 'perez',
    'edad': 2
  }
  constructor() { }

  ngOnInit(): void {
    this.setData();
  }

  private setData() {
    for (let i = 0; i < 10; i++) {
      this.data.push(this.element);
    }
  }
}
