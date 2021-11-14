import { useState } from 'react'
import languages from './languages'

import Header from './components/Header'
import ProductsContainer from './components/ProductsContainer'

import Footer from './components/Footer'
import Cart from './components/Cart'
import Landing from './components/Landing'
import Categories from './components/Categories'

function App() {

  // some constants
  // TODO: put the real number
  const whatsapp_number = '4915-----------'
  const min_value_free_delivery = 20
  const delivery_costs = 2

  // application state
  // TODO: add state management solution if required
  const [language, setLanguage] = useState('english')
  const [scrolled, setScrolled] = useState(0)
  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [freeDelivery, setFreeDelivery] = useState(false)
  const [orderText, setOrderText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const handle_scroll = (e) => {
    setScrolled(e.target.scrollTop)
  }

  const add_product = (product) => {
    if (!product) return
    let new_cart = [...cart]
    const found = new_cart.findIndex(el => el.id === product.id)
    if (found < 0) {
      new_cart.push({ id: product.id, title: product.title, amount: 1, price: product.price })
    }
    else {
      new_cart[found].amount++
    }

    let new_total = 0
    let new_order_text = ''
    for (let i = 0; i < new_cart.length; i++) {
      if (new_cart[i].price.sale_value) new_total += new_cart[i].amount * new_cart[i].price.sale_value
      else new_total += new_cart[i].amount * new_cart[i].price.value

      new_order_text += `${new_cart[i].amount}x ${new_cart[i].title[language]}%0a`
    }
    setOrderText(new_order_text)
    setTotal(new_total)
    setFreeDelivery(new_total >= min_value_free_delivery)
    setCart(new_cart)
  }

  const remove_product = (index) => {
    let new_cart = [...cart]
    new_cart.splice(index, 1)

    let new_total = 0
    let new_order_text = ''
    for (let i = 0; i < new_cart.length; i++) {
      if (new_cart[i].price.sale_value) new_total += new_cart[i].amount * new_cart[i].price.sale_value
      else new_total += new_cart[i].amount * new_cart[i].price.value
      new_order_text += `${new_cart[i].amount}x ${new_cart[i].title[language]}%0a`
    }
    setOrderText(new_order_text)
    setFreeDelivery(new_total >= min_value_free_delivery)
    setTotal(new_total)
    setCart(new_cart)
  }

  return (
    <div className={`App ${language === 'arabic' ? 'arabic' : ''} ${scrolled > 25 ? 'scrolled' : ''}`} onScroll={handle_scroll}>


      {/* the app header */}
      <Header
        onToggleCart={() => setShowCart(!showCart)}
        cart={cart.length !== 0}
        name={languages[language]?.name}
        onLanguageChange={(e) => setLanguage(e.target.value)}
      />


      {/* the landing section
        TODO: show the whatsapp number in desktop
      */}
      <Landing language={language} />

      {/* show the categories */}
      <Categories language={language} onClick={setSelectedCategory} />


      {/* the cart component */}
      {showCart &&
        <Cart
          cart={cart}
          onToggleCart={() => setShowCart(!showCart)}
          language={language}
          onRemoveProduct={remove_product}
          total={total}
          orderText={orderText}
          whatsappNumber={whatsapp_number}
          freeDelivery={freeDelivery}
          deliveryCosts={delivery_costs}
          min_value_free_delivery={min_value_free_delivery}
        />
      }


      {/* show the products
        filter by selectedCategory if selected otherwise show the products with homepage: true attribute
      */}
      <ProductsContainer
        language={language}
        onAddProduct={add_product}
        selectedCategory={selectedCategory}
      />


      {/* footer
        TODO: fix the styling and add designed by kiwi or another vendor
      */}
      <Footer language={language} />
    </div>
  )
}

export default App
