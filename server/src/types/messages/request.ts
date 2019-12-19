export interface NewMessage {
  to?: string[]
  cc?: string[]
  bcc?: string[]
  subject?: string
  body?: string
}

export type Category = 'sent' | 'archive' | 'inbox'
