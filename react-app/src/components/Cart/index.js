import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from "react-router-dom";
import '../CSS/Cart.css'

let cartInStorage = JSON.parse(localStorage.getItem('cart' || '[]'))
// console.log(cartInStorage, 'cartInStorage')

const Cart = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const [quantity, setQuantity] = useState(0)
  const [productId, setProductId] = useState()
  const [cart, setCart] = useState(cartInStorage)

  useEffect(() => {
    const refreshCart = async () => {
      const data = await localStorage.getItem('cart' || '[]');
      setCart(JSON.parse(data))
    }
    refreshCart()
  }, [])

  const handleCheckOut = async (e) => {
    e.preventDefault()
  }

  const calculateTotal = () => {
    return cartInStorage.reduce((sum, { price }) => sum + price, 0)
  }

  return (
    <form onSubmit={handleCheckOut} className='cart-main-outer'>
      {cartInStorage && <div className='cart-header'>{cartInStorage.length} item(s) in your cart</div>}
      <div className='cart-main'>
        <div className='cart-items-outer'>
          {cart && Object.values(cart)?.map((product) => {
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
    </form>
  )
}

export default Cart
