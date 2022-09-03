import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link, useParams } from 'react-router-dom';
import productsReducer, { findProductsByCategory } from '../../store/products';
import '../CSS/ProductsByCategory.css'

import star from '../CSS/Images/filled-star-med.svg'
import unFilledStar from '../CSS/Images/blank-star-med.svg'
import halfStar from '../CSS/Images/half-star-med.svg'

const halfStars = [halfStar, unFilledStar, unFilledStar, unFilledStar, unFilledStar]
const oneStar = [star, unFilledStar, unFilledStar, unFilledStar, unFilledStar]
const oneHalfStar = [star, halfStar, unFilledStar, unFilledStar, unFilledStar]
const twoStar = [star, star, unFilledStar, unFilledStar, unFilledStar]
const twoHalfStar = [star, star, halfStar, unFilledStar, unFilledStar]
const threeStar = [star, star, star, unFilledStar, unFilledStar]
const threeHalfStar = [star, star, star, halfStar, unFilledStar]
const fourStar = [star, star, star, star, unFilledStar]
const fourHalfStar = [star, star, star, star, halfStar]
const fiveStar = [star, star, star, star, star]

const starsDisplay = (starCount) => {
  return (
    <>
      {starCount.map((star) => {
        return (
          <>
            <img className='star-display' src={star}></img>
          </>
        )
      })}
    </>
  )
}

const ProductsByCategory = () => {
  const dispatch = useDispatch()
  let { category } = useParams()
  const products = useSelector(state => Object.values(state.products))
  const categories = useSelector(state => state.categories)

  console.log(category)



  useEffect(() => {
    dispatch(findProductsByCategory(category))
  }, [category])

  return (
    <>
      <div className='search-product-main'>
        <div className='category-upper'>
          <div className='category-header'>
            {categories[category]?.display_name}
          </div>
        </div>
        <div className='category-main'>
          <div className='category-caption'>Find something you love</div>
          <div className='category-products-main'>
            {products?.map((product, i) => {
              return (
                <div className='category-product-inner'>
                  <div className='category-product-img-outer'>
                    <img src={product?.images} className='category-product-img'></img>
                  </div>
                  <div className='category-product-name'>{product.name}</div>
                  {product?.num_reviews > 0 && <>
                    <div className='category-product-stars'>
                      {product?.avg_stars <= 0.5 && <span>{starsDisplay(halfStars)}</span>}
                      {product?.avg_stars > 0.5 && product?.avg_stars <= 1 && <span>{starsDisplay(oneStar)}</span>}
                      {product?.avg_stars > 1 && product?.avg_stars <= 1.5 && <span>{starsDisplay(oneHalfStar)}</span>}
                      {product?.avg_stars > 1.5 && product?.avg_stars <= 2 && <span>{starsDisplay(twoStar)}</span>}
                      {product?.avg_stars > 2 && product?.avg_stars <= 2.5 && <span>{starsDisplay(twoHalfStar)}</span>}
                      {product?.avg_stars > 2.5 && product?.avg_stars <= 3 && <span>{starsDisplay(threeStar)}</span>}
                      {product?.avg_stars > 3 && product?.avg_stars <= 3.5 && <span>{starsDisplay(threeHalfStar)}</span>}
                      {product?.avg_stars > 3.5 && product?.avg_stars <= 4 && <span>{starsDisplay(fourStar)}</span>}
                      {product?.avg_stars > 4 && product?.avg_stars <= 4.5 && <span>{starsDisplay(fourHalfStar)}</span>}
                      {product?.avg_stars > 4.5 && <span>{starsDisplay(fiveStar)}</span>}
                      <span className='category-product-num-reviews'>({product.num_reviews})</span>
                    </div>
                  </>
                  }
                  <div className='category-product-price'>${product?.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                  <div className='category-product-shop'>{product?.shop_name}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsByCategory
