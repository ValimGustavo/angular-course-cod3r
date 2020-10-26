import { HeaderService } from './../../templates/header/header.service';
import { HeaderData } from './../../templates/header/header-data.interface';
import { DataSource } from '@angular/cdk/collections';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Dashboard',
      icon: 'dashboard',
      routeUrl: '/products'
    }

   }

  products: Product[] = []
 
  displayedColumns = ['id', 'name', 'price', 'action']
  ngOnInit(): void {
   this.productService.read()
      .subscribe(products => {
        this.products = products
      })
  }

  deleteProduct(id:string){
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso')
    })
  }




}
