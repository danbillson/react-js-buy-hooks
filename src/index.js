import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { StoreProvider } from './state'
import './app.css'

ReactDOM.render(
  <StoreProvider
    storefrontAccessToken="dd4d4dc146542ba7763305d71d1b3d38"
    domain="graphql.myshopify.com"
  >
    <App />
  </StoreProvider>,
  document.getElementById('root')
)
