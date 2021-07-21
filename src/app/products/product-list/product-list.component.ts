import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    new Product(2000, 'assets/bag-1.jpg'),
    new Product(3400, 'assets/bag-2.jpg'),
    new Product(2999, 'assets/bag-3.jpg'),
    new Product(3500, 'assets/bag-4.jpg'),
    new Product(4000, 'assets/bag-5.jpg'),
    new Product(3999, 'assets/bag-6.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
