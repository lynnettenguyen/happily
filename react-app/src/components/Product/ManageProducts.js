import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadProductsByOwner, findProductById, removeProduct } from "../../store/products";
import '../CSS/ManageProducts.css'
import { Modal } from '../Context/modal';
import EditProduct from "./EditProduct";

const ManageProducts = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const products = useSelector(state => Object.values(state.products))
  const [productId, setProductId] = useState()
  const [deleteConfirmation, setDeleteConfirmation] = useState(false)

  const [showEditForm, setShowEditForm] = useState(false)

  useEffect(() => {
    dispatch(loadProductsByOwner(user.id))
  }, [])

  const handleEdit = (id) => {
    setProductId(id)
    setShowEditForm(true)
  }

  const handleDelete = (id) => {
    setProductId(id)
    setDeleteConfirmation(true)
  }

  const confirmDelete = () => {
    dispatch(removeProduct(productId))
    setDeleteConfirmation(false)
  }

  console.log('PRODUCTS', products)

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
                    <Link to={`/products/${product?.id}`} onClick={() => dispatch(findProductById(product?.id))}>
                      {/* <img src={product?.images[0]} className='my-products-img'></img> */}
                    </Link>
                  </div>
                  <div className="my-products-info">
                    <div className="my-product-category">{product?.category.split("&").join(' & ')}</div>
                    <div className="my-product-name">{product?.name}</div>
                    <div className="my-product-price">${product?.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                    <div className="my-product-buttons">
                      <button className="my-product-edit-button" onClick={() => handleEdit(product?.id)}>Edit</button>
                      <button className="my-product-delete-button" onClick={() => { handleDelete(product?.id) }}>Delete</button>
                    </div>
                  </div>
                </>
              )
            })}
          </div> : <></>}
          {showEditForm && (
            <Modal onClose={() => setShowEditForm(false)}>
              <EditProduct productId={productId} setShowEditForm={setShowEditForm} />
            </Modal>
          )}
          {deleteConfirmation && (
            <Modal onClose={() => setDeleteConfirmation(false)}>
              <div className="delete-confirm-outer">
                <button onClick={() => setDeleteConfirmation(false)} className='delete-return-button'>Return to Shop Manager</button>
                <div className="delete-message">Permanently delete selected product?</div>
                <div className="delete-confirm-button-outer">
                <button onClick={confirmDelete} className='delete-confirm-button'>Confirm</button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </>
  )
}

export default ManageProducts
