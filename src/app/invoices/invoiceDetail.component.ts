import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Invoice } from "../core/models/invoice"
import { InvoiceService } from "../core/services/invoice.service"

@Component({
  selector: 'invoiceDetail',
  templateUrl: './invoiceDetail.component.html',
})
export class InvoiceDetailComponent implements OnInit {
  
  id: string

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.load()
  }

  private load(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.invoiceService.getOneInvoice(this.id).subscribe(
        invoice => this.invoice = invoice
        )
    })
  }

  title: string = "Detalle de factura"
  invoice: Invoice
}
