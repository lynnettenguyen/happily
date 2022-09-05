import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from "react-router-dom";
import '../CSS/Cart.css'

// console.log(cartInStorage, 'cartInStorage')

const Cart = () => {
  let cartInStorage = JSON.parse(localStorage.getItem('cart' || '[]'))
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const [quantity, setQuantity] = useState(0)
  const [productId, setProductId] = useState()
  const [cart, setCart] = useState(cartInStorage)

  useEffect(() => {
    const loadCart = async () => {
      const data = await localStorage.getItem('cart' || '[]');
      setCart(JSON.parse(data))
    }
    loadCart()
  }, [cartInStorage])

  const handleCheckOut = async (e) => {
    e.preventDefault()
  }

  const calculateTotal = () => {
    // return cart.reduce((sum, { price }) => sum + price, 0)
  }

  const totalCartItems = () => {
    // return cart.reduce((sum, { quantity }) => sum + quantity, 0)
  }

  return (
    <>
      {cartInStorage ? <form onSubmit={handleCheckOut} className='cart-main-outer'>
        <div className='cart-header'>{totalCartItems()} item(s) in your cart</div>
        <div className='cart-main'>
          <div className='cart-items-outer'>
            {cart && Object.values(cartInStorage)?.map((product) => {
              return (
                <div className='cart-outer'>
                  <div className='cart-product-img-outer'>
                    <img src={product?.images[0]} className='cart-product-img'></img>
                  </div>
                  <div className='cart-product-info'>
                    <div>{product.name}</div>
                  </div>
                  <div className='cart-product-quantity'>
                    <div>
                      {product.quantity}
                    </div>
                  </div>
                  <div className='cart-product-price'>${product.price}</div>
                </div>
              )
            })}
          </div>
          <div className='cart-purchase-total-outer'>
            <div>Item(s) total</div>
            <div>${calculateTotal()}</div>
            <div>Shipping</div>
            <div>$</div>
            <div>Sales tax</div>
            <div>$</div>
            <div>Subtotal</div>
            <div>$</div>
            <div>
              <button type='submit'>Checkout</button>
            </div>
          </div>
        </div>
      </form> :
      <div>There are no items in the cart.</div>}
    </>
  )
}

export default Cart
