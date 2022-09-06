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
  const [updateCart, setUpdateCart] = useState(false)

  useEffect(() => {
    const loadCart = async () => {
      const data = await localStorage.getItem('cart');
      setCart(JSON.parse(data))
    }
    loadCart()
  }, [updateCart])

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

  const handleRemoveQuantity = (product) => {
    let findItem = cart.filter((item, i) => item.id === product.id)
    let newCart = [...cart]

    if (findItem[0].quantity >= 2) {
      findItem[0].quantity--;
    } else {
      let remainingItems = cart.filter((item, i) => item.id !== product.id)
      let data = localStorage.setItem('cart', JSON.stringify(remainingItems))
      if (data) {
        setCart(JSON.parse(data))
      } else {
        setCart([])
      }
      setUpdateCart(true)
    }
    setCart(newCart)
  }

  const handleAddQuantity = (product) => {
    let findItem = cart.filter((item, i) => item.id === product.id)
    let newCart = [...cart]
    findItem[0].quantity++;
    setCart(newCart)
  }

  return (
    <>
      {cart ? <form onSubmit={handleCheckOut} className='cart-main-outer'>
        <div className='cart-header'>
          {totalCartItems() > 1 ?
            <> {totalCartItems()} items in your cart </> :
            <>{totalCartItems()} item in your cart</>}
        </div>
        <div className='cart-main'>
          <div className='cart-items-outer'>
            {cart && Object.values(cart)?.reverse().map((product) => {
              return (
                <div className='cart-outer'>
                  <Link to={`/products/${product.id}`}>
                    <div className='cart-product-img-outer'>
                      <img src={product?.images[0]} className='cart-product-img'></img>
                    </div>
                  </Link>
                  <div className='cart-product-name'>
                    <div className='cart-product-shop'>{product.shop_name}</div>
                    {product.name}</div>
                  <div className='cart-product-quantity-outer'>
                    <div onClick={() => handleRemoveQuantity(product)} className='quantity-button'>-</div>
                    <div className='cart-product-quantity'>{product.quantity}</div>
                    <div onClick={() => handleAddQuantity(product)} className='quantity-button'>+</div>
                  </div>
                  <div className='cart-product-price'>${product.price}</div>
                </div>
              )
            })}
          </div>
          <div className='cart-purchase-total-outer'>
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
          </div>
        </div>
      </form> :
        <div>There are no items in the cart. Continue Shopping</div>
      }
    </>
  )
}

export default Cart
