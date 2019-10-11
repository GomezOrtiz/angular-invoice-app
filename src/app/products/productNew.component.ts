import { Component, OnInit } from '@angular/core'
import messages from "../../assets/i18n/esEs.json"
import { Product } from '../core/models/product'
import { ProductService } from '../core/services/product.service'
import { Router, ActivatedRoute } from "@angular/router"
import swal from "sweetalert2"

@Component({
  selector: 'app-product-new',
  templateUrl: './productNew.component.html',
})
export class ProductNewComponent implements OnInit {

  protected product: Product = new Product()
  id: string

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.load()
  }
  
  private load(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.productService.getOneProduct(this.id).subscribe(
        product => this.product = product
      )
    })
  }

  private create(): void{
    this.productService.create(this.product).subscribe(
      product => {
        this.router.navigate(["/products"])
        swal.fire("Producto añadido", `El producto ${product.name} se creó correctamente`, "success")
      })
  }

  title: string = "Añadir producto"

}
