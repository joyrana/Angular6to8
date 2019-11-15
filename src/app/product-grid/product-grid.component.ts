import { Component, OnInit } from '@angular/core';
import { products } from './Product';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  public gridData: any[] = products;
  constructor() { }

  ngOnInit() {
  }

}
