import { create, insert, search } from '@nearform/lyra'

const db = create({
  schema: {
    quote: 'string',
    author: 'string'
  }
})

insert(db, {
  quote: 'It is during our darkest moments that we must focus to see the light.',
  author: 'Aristotle'
})

insert(db, {
  quote: 'If you really look closely, most overnight successes took a long time.',
  author: 'Steve Jobs'
})

insert(db, {
  quote: 'If you are not willing to risk the usual, you will have to settle for the ordinary.',
  author: 'Jim Rohn'
})

insert(db, {
  quote: 'You miss 100% of the shots you don\'t take',
  author: 'Wayne Gretzky - Michael Scott'
})

const searchResult = search(db, {
  term: 'if',
  properties: '*'
})

console.log(searchResult)