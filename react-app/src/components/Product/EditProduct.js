import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadProductsByOwner, updateProduct } from "../../store/products";
import '../CSS/EditProduct.css'

const EditProduct = ({ productId, setShowEditForm }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const products = useSelector(state => state.products)
  const categories = useSelector(state => Object.values(state.categories))
  const product = products[productId]

  const [name, setName] = useState(product?.name)
  const [price, setPrice] = useState(product?.price)
  const [description, setDescription] = useState(product?.description)
  const [category, setCategory] = useState(product?.category)

  const handleEdit = async (e) => {
    e.preventDefault()

    const productData = {
      product_id: productId,
      category,
      name,
      price,
      description
    }

    const response = await dispatch(updateProduct(productData))
    if (response) setShowEditForm(false)
  }

  return (
    <>
      <form onSubmit={handleEdit} className='edit-form-outer'>
        <div className='edit-main'>
          <div className="edit-form-upper">
            <button className="edit-return-button" onClick={() => { setShowEditForm(false) }}>Return to Shop Manager</button>
            <div className='edit-header'>Edit your Listing</div>
          </div>
          <div className='edit-field'>
            <div className='edit-field-inner'>
              <label className='edit-label'>Title</label>
              <span className='edit-instructions'>Update the keywords used to search for your item.</span>
            </div>
            <div>
              <textarea
                type='text'
                className='edit-text-area-name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className='edit-field'>
            <div className='edit-field-inner'>
              <label className='edit-label'>Category</label>
              <span className='edit-instructions'>Change the category your product is listed under.</span>
            </div>
            <div className='select-outer'>
              <select
                htmlFor='category'
                name='category'
                className='edit-input'
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                {categories?.map((category) => {
                  return (
                    <option value={category.name}>{category.display_name}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className='edit-field'>
            <div className='edit-field-inner'>
              <label className='edit-label'>Price</label>
              <span className='edit-instructions'>Update the price to factor in the cost of labor, materials, and any business expenses.</span>
            </div>
            <input
              type='number'
              step='any'
              className='edit-input'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0"
            />
          </div>
          <div className='edit-field'>
            <div className='edit-field-inner'>
              <label className='edit-label'>Description</label>
              <span className='edit-instructions'>Modify the description to provide an overview of your item's features.</span>
            </div>
            <textarea
              type='text'
              className='edit-text-area'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='edit-save-button-outer'>
            <button type="submit" className='edit-save-button'>Save and Update</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default EditProduct
