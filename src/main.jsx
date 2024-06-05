import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ProductProvider from './context/ProductContext'
import FilterProvider from './context/FilterContext'
import CartProvider from './context/CartContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ProductProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductProvider>
)