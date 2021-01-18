import { Component, ElementRef, OnInit } from '@angular/core';

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
  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
    this.setData();
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }
  private setData() {
    for (let i = 0; i < 10; i++) {
      this.data.push(this.element);
    }
  }
}
