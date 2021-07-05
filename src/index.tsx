import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Primeira receita',
          type: 'deposit',
          category: 'Trabalho',
          amount: 450,
          createdAt: new Date('2021-05-15 12:56:00')
        },
        {
          id: 2,
          title: 'Primeira despesa',
          type: 'withdraw',
          category: 'Comida',
          amount: 50.56,
          createdAt: new Date('2021-05-25 09:32:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transactions',() => this.schema.all('transaction'))

    this.post('/transactions', (schema,request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction',data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);