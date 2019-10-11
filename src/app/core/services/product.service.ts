import { Injectable } from '@angular/core';
import { Product } from "../models/product"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"

@Injectable()
export class ProductService {

  constructor(private http: HttpClient){}

  private url: string = "http://localhost:8080/api/products"

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }

  getOneProduct(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`)
  }

  getByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/name/${name}`)
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product)
  }

  edit(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${id}`, product)
  }

  discontinue(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`)
  }

}
