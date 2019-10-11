import { Component, OnInit } from '@angular/core'
import messages from "../../assets/i18n/esEs.json"
import { Client } from '../core/models/client'
import { ClientService } from '../core/services/client.service'
import { Router, ActivatedRoute } from "@angular/router"
import swal from "sweetalert2"

@Component({
  selector: 'app-client-edit',
  templateUrl: './clientEdit.component.html',
})
export class ClientEditComponent implements OnInit {

  client: Client = new Client()
  id: string

  constructor(private route: ActivatedRoute, private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.load()
  }
  
  private load(): void {
    this.clientService.getOneClient(this.id).subscribe(
      client => this.client = client
    )
  }

  private update(): void {
    this.clientService.edit(this.id, this.client).subscribe(
    client => {
      this.router.navigate(["/clients"])
      swal.fire("Cliente editado", `El cliente ${client.name} se actualizó correctamente`, "success")
    })
  }

  title: string = "Editar cliente"
  form: { name, surname, email, submit } = messages.clients.form

}
