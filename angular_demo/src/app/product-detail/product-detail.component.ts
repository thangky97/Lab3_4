import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { type } from 'os';

type PRODUCT_ITEM_TYPE = {
  id: number,
  name: string,
  description: string,
  price: number
} | undefined;

type PRODUCTS_TYPE = PRODUCT_ITEM_TYPE[];//mảng dữ liệu có từng phần tử ntnay

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  public id: any = null;
  public showProduct :PRODUCT_ITEM_TYPE;

  constructor(public routes: ActivatedRoute) {
    console.log(this.id);
    
  }

  ngOnInit(): void {
    this.id = this.routes.snapshot.paramMap.get('id');

    this.showProduct = this.products
    .find(product => {
      console.log(this, product, this.id);

      return product?.id == this.id;
    });
  }

  //ds sản phẩm
  products: PRODUCTS_TYPE = [
    {
      'id': 1,
      'name': 'Iphone Xsm',
      'description': 'hí lu',
      'price': 1200000
    },
    {
      'id': 2,
      'name': 'Iphone 13 prm',
      'description': 'beauty',
      'price': 32000000
    }
  ];

  

}
