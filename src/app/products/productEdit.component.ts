import { Component, OnInit } from '@angular/core'
import { Product } from '../core/models/product'
import { ProductService } from '../core/services/product.service'
import { Router, ActivatedRoute } from "@angular/router"
import swal from "sweetalert2"

@Component({
  selector: 'app-product-edit',
  templateUrl: './productEdit.component.html',
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product()
  id: string

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.load()
  }
  
  private load(): void {
    this.productService.getOneProduct(this.id).subscribe(
      product => this.product = product
    )
  }

  private update(): void {
    this.productService.edit(this.id, this.product).subscribe(
    product => {
      this.router.navigate(["/products"])
      swal.fire("Producto editado", `El product ${product.name} se actualizó correctamente`, "success")
    })
  }

  title: string = "Editar producto"

}
