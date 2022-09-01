import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import productsReducer, { getAllProducts } from '../../store/products'
import '../CSS/HomePage.css'

const HomePage = () => {
  const user = useSelector(state => state.session.user)
  const products = useSelector(state => Object.values(state.products))
  const dispatch = useDispatch()


  const unSortProducts = products.sort(() => 0.5 - Math.random())
  const displayedProducts = unSortProducts.slice(0, 8)

  console.log(displayedProducts)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

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
            <div className={`display-product-outer img${i}`} >
              <div className='display-img-outer' >
                <img src={product.image} className={`display-product-img img${i}`} alt='product'></img>
              </div>
              <div className='display-product-price'>${product.price.toFixed(2)}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default HomePage;
