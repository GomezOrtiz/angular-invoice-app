import { Component, OnInit } from '@angular/core'
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap'
import { Product } from "../core/models/product"
import { ProductService } from "../core/services/product.service"
import swal from "sweetalert2"

@Component({
  selector: 'productList',
  templateUrl: './productList.component.html',
})
export class ProductListComponent implements OnInit {
  
  products: Product[]
  query:string
  page: number = 1
  pagesize: number = 6

  constructor(private productService: ProductService, config: NgbPaginationConfig) {
    config.boundaryLinks = true
  }

  ngOnInit() {
    this.getAllProducts()
  }

  private getAllProducts(): void {
    this.productService.getProducts().subscribe(
      products => this.products = products
    )
  }

  private searchByName(): void {
    if(!this.query) this.getAllProducts()
    else {
      this.productService.getByName(this.query).subscribe(
        products => this.products = products
      )
    }
  }

  private discontinue(id: string): void {
    this.productService.discontinue(id)
    .subscribe(response => {
      if(response.modified === "OK") {
        this.getAllProducts()
        swal.fire('¡Actualizado!', 'El producto se ha modificado con éxito', 'success')
      }
    })
  }

  title: string = "Lista de productos"
}