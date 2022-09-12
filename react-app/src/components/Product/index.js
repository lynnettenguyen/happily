import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { findProductById } from '../../store/products';
import { getUsers } from '../../store/users';
import { halfStars, oneStar, oneHalfStar, twoStar, twoHalfStar, threeStar, threeHalfStar, fourStar, fourHalfStar, fiveStar } from './Rating';
import '../CSS/Product.css'
import filledStar from '../CSS/Images/filled-star.svg'
import halfStar from '../CSS/Images/half-star.svg'
import emptyStar from '../CSS/Images/empty-star.svg'
import check from '../CSS/Images/check.svg'
import { Modal } from '../Context/modal';
import LoginForm from '../auth/LoginForm';
import NotFound from '../Navigation/NotFound';

const Product = () => {
  const cartInStorage = JSON.parse(localStorage.getItem('cart'))
  // console.log(cartInStorage, 'cartInStorage') // returns null if empty
  let { productId } = useParams()
  productId = Number(productId)
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const product = useSelector(state => state.products)
  const [selectedImage, setSelectedImage] = useState(product[productId]?.images[0])
  const [rating, setRating] = useState([])
  const users = useSelector(state => state.users)
  const [showSignIn, setShowSignIn] = useState(false)

  const [cart, setCart] = useState(cartInStorage)

  const [notification, setNotification] = useState(false)
  const [count, setCount] = useState(0)

  const roundedStars = Math.floor(product[productId]?.avg_stars)
  const difference = product[productId]?.avg_stars - roundedStars

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  useEffect(() => {
    const response = dispatch(findProductById(productId))
    if (response) setSelectedImage(product[productId]?.images[0])
    displayRating()
  }, [roundedStars])


  const addToCart = (selectedProduct) => {

    if (!user) {
      setShowSignIn(true)
      return
    }

    if (cart && cart.length > 0) {
      let findItem = cart.filter((item, i) => item.id === selectedProduct.id)
      let newCart = [...cart]

      if (findItem[0]) {
        findItem[0].quantity++
      } else {
        findItem = {
          ...selectedProduct,
          quantity: 1
        }
        newCart.push(findItem)
      }
      setCart(newCart)

    } else {
      selectedProduct.quantity = 1
      setCart([selectedProduct])
    }
    setNotification(true)
    setCount(count + 1)
  }

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

  const starsDisplay = (starCount) => {
    return (
      <>
        {starCount.map((star, i) => {
          return (
            <img className='star-display-rating' src={star} key={i} alt='star'></img>
          )
        })}
      </>
    )
  }

  const formatDate = (dateTime) => {
    let month = dateTime.split(" ")[2]
    let day = dateTime.split(" ")[1]
    if (day[0] === '0') day = day.slice(1)
    let year = dateTime.split(" ")[3]

    return `${month} ${day}, ${year}`
  }

  console.log(product[productId])

  if (!product[productId]) {
    return (
      <NotFound />
    )
  }

  return (
    <>
      {product &&
        <div className='product-main'>
          <div className='product-left-main'>
            <div className='product-image-main'>
              <div className='product-preview-image-outer'>
                {product[productId]?.images?.length > 0 && product[productId]?.images?.map((image, i) => {
                  return (
                    <img src={image} className='product-preview-image' key={i} onClick={() => { setSelectedImage(image) }} alt='product'></img>
                  )
                })}
              </div>
              <div className='product-main-image-outer'>
                <img src={selectedImage ? selectedImage : product[productId]?.images[0]} className='product-main-image' alt='product'></img>
              </div>
            </div>
            <div className='product-reviews-main'>
              <div className='product-reviews-header'>
                <div className='product-reviews-num-ratings'>
                  {product[productId]?.reviews?.length !== 1 ? <>{product[productId]?.reviews?.length} shop reviews</> : <>{product[productId]?.reviews?.length} shop review</>}
                  {product[productId]?.reviews?.length === 0 && <div className='empty-stars-outer'>
                    <img src={emptyStar} className='empty-star first-star' alt='star'></img>
                    <img src={emptyStar} className='empty-star' alt='star'></img>
                    <img src={emptyStar} className='empty-star' alt='star'></img>
                    <img src={emptyStar} className='empty-star' alt='star'></img>
                    <img src={emptyStar} className='empty-star' alt='star'></img>
                  </div>}
                </div>
                <div className='product-review-stars'>
                  {rating?.map((star, i) => {
                    return (
                      <img src={star} className='product-review-stars' key={i} alt='star'></img>
                    )
                  })}
                </div>
              </div>
              <div className='product-review-main'>
                {product[productId]?.reviews?.map((review, i) => {
                  return (
                    <div className='product-review-outer' key={i}>
                      <div className='product-review-user-rating'>
                        {review?.stars <= 0.5 && <span>{starsDisplay(halfStars)}</span>}
                        {review?.stars > 0.5 && review?.stars <= 1 && <span>{starsDisplay(oneStar)}</span>}
                        {review?.stars > 1 && review?.stars <= 1.5 && <span>{starsDisplay(oneHalfStar)}</span>}
                        {review?.stars > 1.5 && review?.stars <= 2 && <span>{starsDisplay(twoStar)}</span>}
                        {review?.stars > 2 && review?.stars <= 2.5 && <span>{starsDisplay(twoHalfStar)}</span>}
                        {review?.stars > 2.5 && review?.stars <= 3 && <span>{starsDisplay(threeStar)}</span>}
                        {review?.stars > 3 && review?.stars <= 3.5 && <span>{starsDisplay(threeHalfStar)}</span>}
                        {review?.stars > 3.5 && review?.stars <= 4 && <span>{starsDisplay(fourStar)}</span>}
                        {review?.stars > 4 && review?.stars <= 4.5 && <span>{starsDisplay(fourHalfStar)}</span>}
                        {review?.stars > 4.5 && <span>{starsDisplay(fiveStar)}</span>}
                      </div>
                      <div className='product-review-content'>{review.content}</div>
                      <div className='product-review-user'>
                        <div className='product-review-user-img-outer'><img className='product-review-user-img' src={users[review.user_id]?.profile_pic} alt='user'></img></div>
                        <div className='product-review-user-name'>{users[review.user_id]?.first_name}</div>
                        <div className='product-review-date'>{formatDate(review?.created_at)}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='product-right-main'>
            <div className='product-right-upper'>
              {notification &&
                <div className='notification-outer'>
                  <img src={check} alt='check'></img>
                  <span className='notification-message'>You added {count} item(s) to your <Link to='/cart' className='view-cart-link'>cart</Link>!</span>
                </div>
              }
              <div className='product-shop-name'>{product[productId]?.shop_name}</div>
              <div className='product-rating'>
                {product[productId]?.reviews?.length > 0 ? <>
                  {/* <div className='product-sales'>{`${(Math.floor(Math.random() * (2000 - 200 + 1) + 200)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sales`} <span className='divider'>&nbsp; | &nbsp;</span></div> */}
                  <div className='product-rating-outer'>
                    {rating?.map((star, i) => {
                      return (
                        <img src={star} className='product-rating-stars' key={i} alt='star'></img>
                      )
                    })}
                  </div>
                </> : <></>}
              </div>
              <div className='product-name'>{product[productId]?.name}</div>
              <div className='product-price'>${product[productId]?.price.toFixed(2)}</div>
              <div className='product-cart-outer'>
                {!user && <button className='product-cart-button' onClick={() => addToCart(product[productId])}>Sign in to purchase</button>}
                {user && user?.id !== product[productId]?.seller_id && <button className='product-cart-button' onClick={() => addToCart(product[productId])}>Add to cart</button>}
                {user && user?.id === product[productId]?.seller_id && <button className='disabled-product-cart-button'>Unable to purchase</button>}
              </div>
            </div>
            <div className='product-right-lower'>
              <div className='product-description-header'>Description</div>
              <div className='product-description'>{product[productId]?.description}</div>
            </div>
          </div>
        </div>
      }
      {showSignIn && (
        <Modal onClose={() => setShowSignIn(false)}>
          <LoginForm setShowSignIn={setShowSignIn} />
        </Modal>
      )}
    </>
  )
}

export default Product
