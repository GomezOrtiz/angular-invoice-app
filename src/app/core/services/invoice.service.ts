import { Injectable } from '@angular/core';
import { Invoice } from "../models/invoice"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"

@Injectable()
export class InvoiceService {

  constructor(private http: HttpClient){}

  private url: string = "http://localhost:8080/api/invoices"

  getOneInvoice(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`)
  }

  create(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.url, invoice)
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`)
  }
}
