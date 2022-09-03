import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadProductsByOwner } from "../../store/products";
import '../CSS/ManageProducts.css'

const ManageProducts = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const products = useSelector(state => Object.values(state.products))


  useEffect(() => {
    dispatch(loadProductsByOwner(user.id))
  }, [])

  return (
    <>
      <div className="my-products-main">
        <div className="my-products-upper">
        <div className="my-products-header">Shop Manager</div>
        </div>
        <div className="my-products-outer">
          {products?.map((product, i) => {
            return (
              <div className="my-products-inner">
                <div className="my-products-img-main"><img src={product?.images[0]} className='my-products-img'></img></div>
                <div className="my-products-info">
                  <div>{product.category.split("&").join(' & ')}</div>
                  <div>{product?.name}</div>
                  <div>{product?.price}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ManageProducts
