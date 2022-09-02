import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from "react-router-dom";
import { findProductById } from '../../store/products';
import '../CSS/Products.css'

const Product = () => {
  let { productId } = useParams()
  productId = Number(productId)

  const dispatch = useDispatch()
  const product = useSelector(state => state.products)
  const [selectedImage, setSelectedImage] = useState(product[productId]?.images[0])

  useEffect(() => {
    const response = dispatch(findProductById(productId))
    if (response) setSelectedImage(product[productId]?.images[0])
  }, [])

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
              <div className='product-review-stars'></div>
              <div className='product-review-content'></div>
              <div className='product-review-user'>
                <div className='product-review-user-outer'></div>
                <div className='product-review-user-name'></div>
                <div className='product-review-date'></div>
              </div>
            </div>
          </div>
          <div className='product-right-main'>
            <div className='product-shop-name'></div>
            <div className='product-sales'></div>
            <div className='product-rating-outer'>
              <div className='product-rating'></div>
              <div className='product-rating-stars'></div>
              <div className='product-rating-reviews'></div>
            </div>
            <div className='product-name'></div>
            <div className='product-price'></div>
            <div className='product-cart-button'></div>
            <div className='product-description'></div>
          </div>
        </div>
      }
    </>
  )
}

export default Product
