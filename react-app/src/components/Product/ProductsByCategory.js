import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { findProductById, findProductsByCategory } from '../../store/products';
import { getUsers } from '../../store/users';
import '../CSS/ProductsByCategory.css'
import Footer from '../Navigation/Footer';
import NotFound from '../Navigation/NotFound';

import { halfStars, oneStar, oneHalfStar, twoStar, twoHalfStar, threeStar, threeHalfStar, fourStar, fourHalfStar, fiveStar } from './Rating';

const starsDisplay = (starCount) => {
  return (
    <>
      {starCount.map((star, i) => {
        return (
          <img className='star-display' src={star} key={i} alt='star'></img>
        )
      })}
    </>
  )
}

const ProductsByCategory = () => {
  const dispatch = useDispatch()
  let { category } = useParams()
  const categories = useSelector(state => state.categories)
  let products = useSelector(state => Object.values(state.products))
  products = products.sort(() => 0.5 - Math.random())

  useEffect(() => {
    dispatch(findProductsByCategory(category))
  }, [category])

  const productDetails = (id) => {
    dispatch(findProductById(id))
    dispatch(getUsers())
  }

  if (!categories[category]) {
    return (
      <NotFound />
    )
  }

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
                <Link to={`/products/${product?.id}`} key={i} onClick={() => productDetails(product?.id)}>
                  <div className='category-product-inner'>
                    <div className='category-product-img-outer'>
                      {product?.images?.length > 0 && <img src={product?.images} className='category-product-img' alt='product'></img>}
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
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductsByCategory
