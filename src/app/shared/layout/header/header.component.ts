import { Component } from '@angular/core'
import messages from "../../../../assets/i18n/esEs.json"

@Component({
    selector: 'app-layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    header: { companyName, clients, products, invoice, signup} = messages.header
}