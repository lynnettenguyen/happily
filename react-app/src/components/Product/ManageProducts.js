import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadProductsByOwner, findProductById } from "../../store/products";
import '../CSS/ManageProducts.css'

const ManageProducts = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const products = useSelector(state => Object.values(state.products))


  useEffect(() => {
    dispatch(loadProductsByOwner(user.id))
  }, [])

  const handleEdit = () => {

  }

  return (
    <>
      <div className="my-products-main">
        <div className="my-products-upper">
          <div className="my-products-header">Shop Manager</div>
        </div>
        <div className="my-products-outer">
          <div className="my-products-inner">
            {products?.reverse().map((product, i) => {
              return (
                <>
                  <div className="my-products-img-main">
                    <Link to={`/products/${product?.id}`} onClick={() => dispatch(findProductById(product?.id))}><img src={product?.images[0]} className='my-products-img'>
                    </img>
                    </Link>
                  </div>
                  <div className="my-products-info">
                    <div className="my-product-category">{product.category.split("&").join(' & ')}</div>
                    <div className="my-product-name">{product?.name}</div>
                    <div className="my-product-price">${product?.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                    <div className="my-product-buttons">
                      <button className="my-product-edit-button" onClick={handleEdit}>Edit</button>
                      <button className="my-product-delete-button">Delete</button>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageProducts
