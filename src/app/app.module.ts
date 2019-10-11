//MODULES
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"

//SERVICES
import { ClientService } from "./core/services/client.service"
import { ProductService } from "./core/services/product.service"
import { InvoiceService } from './core/services/invoice.service';

//COMPONENTS
import { AppComponent } from "./app.component"
import { HeaderComponent } from './shared/layout/header/header.component'
import { FooterComponent } from './shared/layout/footer/footer.component'
import { ClientListComponent } from './clients/clientList.component'
import { ClientDetailComponent } from "./clients/clientDetail.component"
import { ClientNewComponent } from './clients/clientNew.component'
import { ClientEditComponent } from './clients/clientEdit.component'
import { ProductListComponent } from './products/productList.component'
import { ProductNewComponent } from './products/productNew.component'
import { ProductEditComponent } from './products/productEdit.component'
import { InvoiceDetailComponent } from './invoices/invoiceDetail.component';

const routes: Routes = [
  {path: "", redirectTo: "/clients", pathMatch: "full"},
  {path: "clients", component: ClientListComponent},
  {path: "clients/new", component: ClientNewComponent},
  {path: "clients/:id", component: ClientDetailComponent},
  {path: "clients/edit/:id", component: ClientEditComponent},
  {path: "products", component: ProductListComponent},
  {path: "products/new", component: ProductNewComponent},
  {path: "products/edit/:id", component: ProductEditComponent},
  {path: "invoices/:id", component: InvoiceDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientListComponent,
    ClientDetailComponent,
    ClientNewComponent,
    ClientEditComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductEditComponent,
    InvoiceDetailComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NgbPaginationConfig, 
    ClientService, 
    ProductService, 
    InvoiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
