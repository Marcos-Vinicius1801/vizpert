import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

import  book_a from '../src/assets/book_a.svg'
import  book_b from '../src/assets/book_b.svg'
import  book_c from '../src/assets/book_c.svg'
import  book_d from '../src/assets/book_d.svg'
import  book_e from '../src/assets/book_e.svg'
import  book_f from '../src/assets/book_f.svg'
import  book_g from '../src/assets/book_g.svg'
import  book_h from '../src/assets/book_h.svg'
import  book_i from '../src/assets/book_i.svg'

createServer({
  models: {
    upperbook: Model,
    downbook: Model,
    
},
  
seeds(server) {
    server.db.loadData({
      upperbooks: [
        {
          id: 1,
          title: 'A',
          color: 'yellow',
          size: 'big',
          img: book_a,
          createdAt: new Date('2022-02-15 09:00:00'),
        },
        {
          id: 2,
          title: 'B',
          color: 'red',
          size: 'medium',
          img: book_b,
          createdAt: new Date('2022-02-15 09:00:00'),
        },
        {
          id: 3,
          title: 'C',
          color: 'orange',
          size: 'big',
          img: book_c,
          createdAt: new Date(),
        },
        {
          id: 4,
          title: 'D',
          color: 'purple',
          size: 'big',
          img: book_d,
          createdAt: new Date(),
        },
        {
          id: 5,
          title: 'E',
          color: 'light-blue',
          size: 'small',
          img: book_e,
          createdAt: new Date(),
        },
        {
          id: 6,
          title: 'F',
          color: 'violet',
          size: 'medium',
          img: book_f,
          createdAt: new Date(),
        }      
      ],

      downbooks: [
        {
          id: 1,
          title: 'G',
          color: 'pink',
          size: 'small',
          img: book_g,
          createdAt: new Date('2022-02-15 09:00:00'),
        },
        {
          id: 2,
          title: 'H',
          color: 'dark-blue',
          size: 'big',
          img: book_h,
          createdAt: new Date('2022-02-15 09:00:00'),
        },
        {
          id: 3,
          title: 'I',
          color: 'green',
          size: 'big',
          img: book_i,
          createdAt: new Date(),
        },
      
      ]
    })
  },

  routes() {
      console.log(this.schema.db)
      this.namespace = 'api';
        
    this.get('/booksupershelf', () => {
       return this.schema.all('upperbook');
    })

    this.get('/booksdownshelf', () => {
      return this.schema.all('downbook');
   })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

