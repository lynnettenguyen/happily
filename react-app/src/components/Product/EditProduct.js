import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadProductsByOwner, findProductById } from "../../store/products";
import '../CSS/EditProduct.css'

const EditProduct = ({ productId }) => {
  const products = useSelector(state => state.products)
  const categories = useSelector(state => Object.values(state.categories))
  const product = products[productId]

  const [name, setName] = useState(product?.name)
  const [price, setPrice] = useState(product?.price)
  const [description, setDescription] = useState(product?.description)
  const [category, setCategory] = useState(product?.category)

  const handleEdit = async (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleEdit} className='edit-form-outer'>
        <div className='edit-main'>
          <div className="edit-form-upper">
          <button className="edit-return-button">Return to Shop Manager</button>
          <div className='edit-header'>Edit your Listing</div>
          </div>
          <div className='edit-field'>
            <div>
              <label className='edit-label'>Title</label>
              <span className='edit-instructions'>Update the keywords used to search for your item.</span>
            </div>
            <div>
              <input
                type='text'
                className='edit-input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className='edit-field'>
            <div>
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
            <div>
              <label className='edit-label'>Price</label>
              <span className='edit-instructions'>Update the price to factor in the cost of labor, materials, and any business expenses.</span>
            </div>
            <input
              type='number'
              className='edit-input'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0"
            />
          </div>
          <div className='edit-field'>
            <div>
              <label className='edit-label'>Description</label>
              <span className='edit-instructions'>Modify the description to provide an improved overview of your item's finest features.</span>
            </div>
            <textarea
              type='text'
              className='edit-text-area'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='save-button-outer'>
            <button type="submit" className='product-save-button'>Save and Continue</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default EditProduct
