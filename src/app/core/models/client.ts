import { Invoice } from './invoice'

export class Client {
    id: number
    name: string
    surname: string
    email: string
    createdAt: Date
    invoices: Invoice[]
}