import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link, useParams} from 'react-router-dom';
import { findProductsByCategory } from '../../store/products';

const ProductsByCategory = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => Object.values(state.products))
  let { category } = useParams()

  console.log(category)

  useEffect(() => {
    dispatch(findProductsByCategory(category))
  }, [category])

  return (
    <>
      <div className='search-product-main'>
        <div>Find something you love</div>
        {products?.map((product, i) => {
          return (
            <div>
              <div>
                {/* <img src={product?.images[0]}></img> */}
              </div>
              <div>{product.name}</div>
              <div>
                {/* <div>Stars</div>
                <div>NumReviews</div> */}
              </div>
              {/* <div>Price</div>
              <div>ShopName</div> */}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ProductsByCategory
