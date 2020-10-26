import { HeaderService } from './../../templates/header/header.service';
import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }


  constructor(
    private productService:ProductService,
    private router:Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title:  "Cadastro de produto",
      icon: "storefront",
      routeUrl: "/products"
    }
   }

  ngOnInit(): void {
  }

  createProduct(){
    this.productService.createProduct(this.product)
      .subscribe((data) => {
        this.productService.showMessage('produto criado com sucesso')
        console.log(data)
      })
      this.router.navigate(['products'])
  }

  cancel(){
    this.router.navigate(['products'])
  }

}
