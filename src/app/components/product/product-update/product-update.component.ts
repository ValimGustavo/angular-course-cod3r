import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanActivate, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router:Router,
    private route: ActivatedRoute
  ) { }


  product:Product

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id)
      .subscribe(product => {
        this.product = product
      })
  }

  updateProduct(){
    this.productService.update(this.product)
      .subscribe(productUpdated => {
      this.productService.showMessage('Produto atualizado com sucesso')
      })
      this.router.navigate(['products'])
  }

  cancel(){
    this.router.navigate(['products'])
  }
}
