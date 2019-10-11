import { Component } from '@angular/core'
import messages from "../../../../assets/i18n/esEs.json"

@Component({
    selector: 'app-layout-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    footer: {description} = messages.footer
}