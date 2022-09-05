import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from "react-router-dom";
import { findProductById } from '../../store/products';
import '../CSS/Product.css'
import filledStar from '../CSS/Images/filled-star.svg'
import halfStar from '../CSS/Images/half-star.svg'
import emptyStar from '../CSS/Images/empty-star.svg'

const cartInStorage = JSON.parse(localStorage.getItem('cart'))
console.log(cartInStorage, 'cartInStorage') // returns null if empty

const Product = () => {
  let { productId } = useParams()
  productId = Number(productId)

  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const product = useSelector(state => state.products)
  const [selectedImage, setSelectedImage] = useState(product[productId]?.images[0])
  const [rating, setRating] = useState([])

  const [cart, setCart] = useState(cartInStorage ? cartInStorage : [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  console.log('cart', cart)
  console.log('cart.length', cart.length)


  const addToCart = (selectedProduct) => {
    if (cart.length > 0) {
      console.log('ITEM IS ALREADY IN CART')
      let findItem = cart.filter((item, i) => item.id === selectedProduct.id)
      console.log('finditem', findItem)
      let newCart = [...cart]
      console.log('NEWCART', newCart)

      if (findItem[0]) {
        findItem[0].quantity++
        console.log(findItem[0].quantity, "!!!!!!!!!!!!")

      } else {
        findItem = {
          ...selectedProduct,
          quantity: 1
        }
        console.log(findItem, 'fine item in object')
        newCart.push(findItem)
      }
      setCart(newCart)

    } else {
      console.log('CART IS EMPTY')
      selectedProduct.quantity = 1
      setCart([selectedProduct])
    }
  }



  const roundedStars = Math.floor(product[productId]?.avg_stars)
  const difference = product[productId]?.avg_stars - roundedStars

  const displayRating = () => {
    const ratingArr = []
    for (let i = 0; i < roundedStars; i++) {
      ratingArr.push(filledStar)
    }

    if (difference >= 0.5) ratingArr.push(halfStar)

    const remainder = 5 - ratingArr.length
    if (ratingArr.length > 0 && remainder > 0) {
      let index = 0
      while (index < remainder) {
        ratingArr.push(emptyStar)
        index += 1
      }
    }

    setRating(ratingArr)
  }

  useEffect(() => {
    const response = dispatch(findProductById(productId))
    if (response) setSelectedImage(product[productId]?.images[0])
    displayRating()
  }, [roundedStars])

  return (
    <>
      {product &&
        <div className='product-main'>
          <div className='product-left-main'>
            <div className='product-image-main'>
              <div className='product-preview-image-outer'>
                {product[productId]?.images?.map((image) => {
                  return (
                    <img src={image} className='product-preview-image' onClick={() => { setSelectedImage(image) }}></img>
                  )
                })}
              </div>
              <div className='product-main-image-outer'>
                <img src={selectedImage ? selectedImage : product[productId]?.images[0]} className='product-main-image'></img>
              </div>
            </div>
            <div className='product-reviews-main'>
              <div className='product-reviews-header'>
                <div className='product-reviews-num-ratings'>
                  {product[productId]?.reviews?.length} shop reviews
                  {product[productId]?.reviews?.length === 0 && <div className='empty-stars-outer'>
                    <img src={emptyStar} className='empty-star first-star' alt='star'></img>
                    <img src={emptyStar} className='empty-star' alt='star'></img>
                    <img src={emptyStar} className='empty-star' alt='star'></img>
                    <img src={emptyStar} className='empty-star' alt='star'></img>
                    <img src={emptyStar} className='empty-star' alt='star'></img>
                  </div>}
                </div>
                <div className='product-review-stars'>
                  {rating?.map((star) => {
                    return (
                      <img src={star} className='product-review-stars'></img>
                    )
                  })}
                </div>
              </div>
              <div className='product-review-content'>
                {product[productId]?.reviews?.map((review) => {
                  return (
                    <>
                      <div className='product-review-user-rating'>
                      </div>
                      <div className='product-review-content'></div>
                      <div className='product-review-user'>
                        <div className='product-review-user-outer'></div>
                        <div className='product-review-user-name'></div>
                        <div className='product-review-date'></div>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='product-right-main'>
            <div className='product-right-upper'>
              <div className='product-shop-name'>{user?.shop_name}</div>
              <div className='product-rating'>
                {product[productId]?.reviews?.length > 0 ? <>
                  <div className='product-sales'>{`${(Math.floor(Math.random() * (2000 - 200 + 1) + 200)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sales`} <span className='divider'>&nbsp; | &nbsp;</span></div>
                  <div className='product-rating-outer'>
                    {rating?.map((star) => {
                      return (
                        <img src={star} className='product-rating-stars'></img>
                      )
                    })}
                  </div>
                </> : <></>}
              </div>
              <div className='product-name'>{product[productId]?.name}</div>
              <div className='product-price'>${product[productId]?.price.toFixed(2)}</div>
              <div className='product-cart-outer'>
                <button className='product-cart-button' onClick={() => addToCart(product[productId])}>Add to cart</button>
              </div>
            </div>
            <div className='product-right-lower'>
              <div className='product-description-header'>Description</div>
              <div className='product-description'>{product[productId]?.description}</div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Product
