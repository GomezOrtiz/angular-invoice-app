import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Client } from "../core/models/client"
import { ClientService } from "../core/services/client.service"
import { InvoiceService } from "../core/services/invoice.service"
import messages from "../../assets/i18n/esEs.json"
import swal from "sweetalert2"
import {DELETE_BTN} from "../../assets/swal"

@Component({
  selector: 'clientDetail',
  templateUrl: './clientDetail.component.html',
})
export class ClientDetailComponent implements OnInit {
  
  id: string

  constructor(private route: ActivatedRoute, private clientService: ClientService, private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.load()
  }

  private load(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.clientService.getOneClient(this.id).subscribe(
        client => this.client = client
        )
    })
  }

  private delete(id: string): void {
    swal.fire(DELETE_BTN).then(result => {
      if (result.value) {
        this.invoiceService.delete(id)
        .subscribe(response => {
          if(response.deleted === "OK") {
            this.client.invoices = this.client.invoices.filter(invoice => invoice.id != parseInt(id))
            swal.fire('¡Borrado!', 'La factura se ha borrado con éxito', 'success')
          }
        })
      }
    })
  }

  title: string = "Detalle de cliente"
  detail: { name, surname, email, createdAt, notFound, invoice, details, date, total, delete, show, newInvoice } = messages.clients.detail
  client: Client
}
