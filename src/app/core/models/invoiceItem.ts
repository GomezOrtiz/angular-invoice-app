import { Product } from './product'
import { Invoice } from './invoice'

export class InvoiceItem {
    id: number
    amount: number
    product: Product
    invoice: Invoice
}