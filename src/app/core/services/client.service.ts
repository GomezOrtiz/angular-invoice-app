import { Injectable } from '@angular/core';
import { Client } from "../models/client"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"

@Injectable()
export class ClientService {

  constructor(private http: HttpClient){}

  private url: string = "http://localhost:8080/api/clients"

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url)
  }

  getOneClient(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`)
  }

  getByName(name: string): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}/name/${name}`)
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url, client)
  }

  edit(id: string, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}/${id}`, client)
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`)
  }

}
