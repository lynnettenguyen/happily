import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { Modal } from '../Context/modal';
import LoginForm from '../auth/LoginForm';
import { createPurchase, getAllPurchases } from '../../store/purchases';
import { nanoid } from 'nanoid'
import '../CSS/Cart.css'

const Cart = () => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const history = useHistory()
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))
  const [updateCart, setUpdateCart] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)

  useEffect(() => {
    const loadCart = async () => {
      const data = await localStorage.getItem('cart');
      setCart(JSON.parse(data))
    }
    loadCart()
  }, [updateCart])

  const handleCheckOut = async (e) => {
    e.preventDefault()

    if (!user) {
      setShowSignIn(true)
      return
    }

    let purchaseData;
    let count = 0

    const order = nanoid(8)

    cart.forEach((item) => {

      purchaseData = {
        order_number: order,
        user_id: user.id,
        product_id: item.id,
        quantity: item.quantity,
        product_total: (item.price * item.quantity).toFixed(2),
        purchase_total: calculateTotal().toFixed(2)
      }

      const response = dispatch(createPurchase(purchaseData))
      if (response) {
        count += 1;
      }
    })

    if (count === cart.length) {
      const response = dispatch(getAllPurchases())
      if (response) {
        localStorage.removeItem('cart')
        history.push('/purchases')
      }
    }
  }

  const calculateTotal = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
  }

  const totalCartItems = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0)
  }

  const convertTotal = (price) => {
    return price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const handleRemoveQuantity = async (product) => {
    let findItem = cart.filter((item, i) => item.id === product.id)
    let newCart = [...cart]

    if (findItem[0].quantity > 1) {
      findItem[0].quantity--;
      setCart(newCart)
      await localStorage.setItem('cart', JSON.stringify(cart))
      setCart(JSON.parse(localStorage.getItem('cart')))
    } else {
      let remainingItems = cart.filter((item, i) => item.id !== product.id)
      await localStorage.setItem('cart', JSON.stringify(remainingItems))
      setCart(JSON.parse(localStorage.getItem('cart')))
      setUpdateCart(true)
    }
  }

  const handleAddQuantity = async (product) => {
    let findItem = cart.filter((item, i) => item.id === product.id)
    let newCart = [...cart]
    findItem[0].quantity++;
    setCart(newCart)
    await localStorage.setItem('cart', JSON.stringify(cart))
    setCart(JSON.parse(localStorage.getItem('cart')))
    setUpdateCart(true)
  }

  return (
    <form onSubmit={handleCheckOut} className='cart-main-outer'>
      {cart && cart.length > 0 ? <>
        <div className='cart-header'>
          {totalCartItems() !== 1 ?
            <> {totalCartItems()} items in your cart </> :
            <>{totalCartItems()} item in your cart</>
          }
        </div>
        <div className='cart-main'>
          <div className='cart-items-outer'>
            {cart && Object.values(cart)?.reverse().map((product, i) => {
              return (
                <div className='cart-outer' key={i}>
                  <Link to={`/products/${product.id}`}>
                    <div className='cart-product-img-outer'>
                      {product?.images?.length > 0 && <img src={product?.images[0]} className='cart-product-img' alt='product'></img>}
                    </div>
                  </Link>
                  <div className='cart-product-name'>
                    <div className='cart-product-shop'>{product.shop_name}</div>
                    {product.name}</div>
                  <div className='cart-product-quantity-outer'>
                    <button type='button' onClick={() => handleRemoveQuantity(product)} className='quantity-button'>-</button>
                    <div className='cart-product-quantity'>{product.quantity}</div>
                    <button type='button' onClick={() => handleAddQuantity(product)} className='quantity-button' disabled={product.quantity === 200}>+</button>
                  </div>
                  <div className='cart-product-price'>${convertTotal(product.price)}</div>
                </div>
              )
            })}
          </div>
          {cart.length > 0 && <div className='cart-purchase-total-outer'>
            <div className='cart-fees-upper'>
              <div className='cart-total-labels-outer'>
                <div className='cart-total'>Item(s) total</div>
                <div className='cart-total'>Tax</div>
              </div>
              <div className='cart-total-price-outer'>
                <div className='cart-total'>${convertTotal(calculateTotal())}</div>
                <div className='cart-total'>${convertTotal(calculateTotal() * 0.09125)}</div>
              </div>
            </div>
            <div className='cart-fees-bottom'>
              <div className='cart-fees-label-outer'>
                <div className='cart-fee-label'>Shipping</div>
                <div className='cart-fee-label'>Subtotal</div>
              </div>
              <div className='cart-total-price-outer'>
                <div className='cart-fee-price-shipping'>FREE</div>
                <div className='cart-fee-price'>${convertTotal(calculateTotal() * 1.09125)}</div>
              </div>
            </div>
            <div>
              <button type='submit' className='checkout-button'>Checkout</button>
            </div>
          </div>}
        </div>
      </> : <div className='cart-header-empty'>Your cart is empty.</div>}
      {showSignIn && (
        <Modal onClose={() => setShowSignIn(false)}>
          <LoginForm setShowSignIn={setShowSignIn} />
        </Modal>
      )}
    </form>
  )
}

export default Cart
