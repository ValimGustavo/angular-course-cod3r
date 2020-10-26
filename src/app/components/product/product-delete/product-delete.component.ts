import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  product:Product

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id)
      .subscribe(productInfo => {
        this.product = productInfo
      })
  }

  deleteProduct(){
    const id = this.product.id.toString()
    this.productService.delete(id)
    .subscribe(info => {
      this.productService.showMessage('Produto foi deletado')
      this.router.navigate(['products'])
    })
  }

  cancel(){
    this.router.navigate(['products'])
  }
}
