import { Component, OnInit } from '@angular/core'
import messages from "../../assets/i18n/esEs.json"
import { Client } from '../core/models/client'
import { ClientService } from '../core/services/client.service'
import { Router, ActivatedRoute } from "@angular/router"
import swal from "sweetalert2"

@Component({
  selector: 'app-client-new',
  templateUrl: './clientNew.component.html',
})
export class ClientNewComponent implements OnInit {

  protected client: Client = new Client()
  id: string

  constructor(private route: ActivatedRoute, private clientService: ClientService, private router: Router) {}

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

  private create(): void{
    this.clientService.create(this.client).subscribe(
      client => {
        this.router.navigate(["/clients"])
        swal.fire("Cliente añadido", `El cliente ${client.name} se creó correctamente`, "success")
      })
  }

  title: string = "Añadir cliente"
  form: { name, surname, email, submit } = messages.clients.form

}
