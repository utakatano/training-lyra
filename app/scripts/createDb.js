import { create } from '@nearform/lyra'

const db = create({
  schema: {
    quote: 'string',
    author: 'string'
  }
})