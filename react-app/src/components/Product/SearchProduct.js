import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

const searchProduct = () => {
  const products = useSelector(state => Object.values(state.products))

  return (
    <>
      <div className='search-product-main'>
        <div>Find something you love</div>
        {products?.map((product, i) => {
          return (
            <div>
              <div>
                <img src={product?.image[0]}></img>
              </div>
              <div>{product.name}</div>
              <div>
                <div>Stars</div>
                <div>NumReviews</div>
              </div>
              <div>Price</div>
              <div>ShopName</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default searchProduct
