import { Client } from './client'
import { InvoiceItem } from './invoiceItem'

export class Invoice {
    id: number
    client: Client
    description: string
    details: string
    total: number
    createdAt: Date
    items: InvoiceItem[]
}