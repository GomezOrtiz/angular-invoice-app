import { Component, OnInit } from '@angular/core'
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap'
import { Client } from "../core/models/client"
import { ClientService } from "../core/services/client.service"
import messages from "../../assets/i18n/esEs.json"
import swal from "sweetalert2"
import {DELETE_BTN} from "../../assets/swal"

@Component({
  selector: 'clientList',
  templateUrl: './clientList.component.html',
})
export class ClientListComponent implements OnInit {
  
  clients: Client[]
  query:string
  page: number = 1
  pagesize: number = 6

  constructor(private clientService: ClientService, config: NgbPaginationConfig) {
    config.boundaryLinks = true
  }

  ngOnInit() {
    this.getAllClients()
  }

  private getAllClients(): void {
    this.clientService.getClients().subscribe(
      clients => this.clients = clients
    )
  }

  private searchByName(): void {
    if(!this.query) this.getAllClients()
    else {
      this.clientService.getByName(this.query).subscribe(
        clients => this.clients = clients
      )
    }
  }

  private delete(id: string): void {
    swal.fire(DELETE_BTN).then(result => {
      if (result.value) {
        this.clientService.delete(id)
        .subscribe(response => {
          if(response.deleted === "OK") {
            this.clients = this.clients.filter(client => client.id != parseInt(id))
            swal.fire('¡Borrado!', 'El cliente se ha borrado con éxito', 'success')
          }
        })
      }
    })
  }

  title: string = "Lista de clientes"
  search: { clients, button } = messages.search
  list: { add, name, surname, email, createdAt, detail, edit, delete } = messages.clients.list
}
