import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from "react-router-dom";
import '../CSS/Cart.css'
import { nanoid } from 'nanoid'
import { createPurchase, getAllPurchases } from '../../store/purchases';

const Cart = () => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const history = useHistory()
  const [quantity, setQuantity] = useState(0)
  const [productId, setProductId] = useState(0)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const loadCart = async () => {
      const data = await localStorage.getItem('cart' || '[]');
      setCart(JSON.parse(data))
    }
    loadCart()
  }, [])

  console.log('cart', cart)

  const handleCheckOut = async (e) => {
    e.preventDefault()

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
        console.log(purchaseData)
      }
    })

    if (count === cart.length) {
      dispatch(getAllPurchases())
      localStorage.removeItem('cart')
      history.push('/purchases')
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


  return (
    <>
      {cart ? <form onSubmit={handleCheckOut} className='cart-main-outer'>
        <div className='cart-header'>{totalCartItems()} item(s) in your cart</div>
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
            <div>${convertTotal(calculateTotal())}</div>
            <div>Shipping</div>
            <div>FREE</div>
            <div>Sales tax</div>
            <div>${convertTotal(calculateTotal() * 0.09125)}</div>
            <div>Subtotal</div>
            <div>${convertTotal(calculateTotal() * 1.09125)}</div>
            <div>
              <button type='submit'>Checkout</button>
            </div>
          </div>
        </div>
      </form> :
        <div>There are no items in the cart. Continue Shopping</div>}
    </>
  )
}

export default Cart
