import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { findProductById, getAllProducts } from '../../store/products'
import { getUsers } from '../../store/users'
import '../CSS/HomePage.css'
import star from '../CSS/Images/star.svg'

const HomePage = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const products = useSelector(state => Object.values(state.products))

  const unSortProducts = products.sort(() => 0.5 - Math.random())
  const displayedProducts = unSortProducts.slice(0, 8)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const productDetails = (id) => {
    dispatch(findProductById(id))
    dispatch(getUsers())
  }

  return (
    <>
      {user ?
        <div className='home-header'> Welcome back, {user.first_name} </div> :
        <div className='home-header'> Find everything you need to tie the knot.</div>
      }

      <div className='home-featured-circles-outer'>
        <div className='feature-circle-main'>
          <div className='featured-img'></div>
          <div className='featured-name'>Welcome Signs</div>
        </div>
        <div className='feature-circle-main'>
          <div className='featured-img'></div>
          <div className='featured-name'>Toasting Flutes</div>
        </div>
        <div className='feature-circle-main'>
          <div className='featured-img'></div>
          <div className='featured-name'>Wedding Rings</div>
        </div>
        <div className='feature-circle-main'>
          <div className='featured-img'></div>
          <div className='featured-name'>Cake Toppers</div>
        </div>
        <div className='feature-circle-main'>
          <div className='featured-img'></div>
          <div className='featured-name'>Guestbooks</div>
        </div>
        <div className='feature-circle-main'>
          <div className='featured-img'></div>
          <div className='featured-name'>Seating Charts</div>
        </div>
      </div>

      <div className='display-product-main'>
        {displayedProducts?.map((product, i) => {
          return (
            <div className={`display-product-outer img${i}`}>
              <Link to={`/products/${product.id}`} onClick={() => productDetails(product.id)}>
                <div className='display-img-outer' >
                  {product?.images?.length > 0 && <img src={product?.images[0]} className={`display-product-img img${i}`} alt='product'></img>}
                </div>
                <div className='display-product-price'>${product?.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
              </Link>
            </div>
          )
        })}
      </div >
    </>
  )
}

export default HomePage;
