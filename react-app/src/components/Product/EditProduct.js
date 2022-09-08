import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../store/products";
import '../CSS/EditProduct.css'

const EditProduct = ({ productId, setShowEditForm }) => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const categories = useSelector(state => Object.values(state.categories))
  const product = products[productId]

  const [name, setName] = useState(product?.name)
  const [price, setPrice] = useState(product?.price)
  const [description, setDescription] = useState(product?.description)
  const [category, setCategory] = useState(product?.category)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const errors = []
    if (name.length < 10) errors.push('Name: Title requires 10 characters minimum')
    if (name.length > 140) errors.push('Name: Title exceeds 140 character limit')
    if (category.length === 0) errors.push('Category: Category selection is required')
    if (price < 1) errors.push('Price: Minimum price of $1.00 required')
    if (price > 1000000) errors.push('Price: Price exceeds $1,000,000 limit')
    if (description.length < 10) errors.push('Description: Description requires 10 characters minimum')
    if (description.length > 1000) errors.push('Description: Description exceeds 1000 character limit')
    setErrors(errors)
  }, [name, category, price, description])

  const handleEdit = async (e) => {
    e.preventDefault()

    if (errors.length > 0) return

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
              <label className='edit-label'>Title *</label>
              <span className='edit-instructions'>Update the keywords used to search for your item.</span>
            </div>
            {errors?.map((error, ind) => {
              if (error.split(":")[0] === 'Name')
                return (
                  <div key={ind} className='edit-product-errors'>-{error.split(":")[1]}</div>
                )
            })}
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
              <label className='edit-label'>Category *</label>
              <span className='edit-instructions'>Change the category your product is listed under.</span>
            </div>
            {errors?.map((error, ind) => {
              if (error.split(":")[0] === 'Category')
                return (
                  <div key={ind} className='edit-product-errors'>-{error.split(":")[1]}</div>
                )
            })}
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
              <label className='edit-label'>Price *</label>
              <span className='edit-instructions'>Update the price to factor in the cost of labor, materials, and any business expenses.</span>
            </div>
            {errors?.map((error, ind) => {
              if (error.split(":")[0] === 'Price')
                return (
                  <div key={ind} className='edit-product-errors'>-{error.split(":")[1]}</div>
                )
            })}
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
              <label className='edit-label'>Description *</label>
              <span className='edit-instructions'>Modify the description to provide an overview of your item's features.</span>
            </div>
            {errors?.map((error, ind) => {
              if (error.split(":")[0] === 'Description')
                return (
                  <div key={ind} className='edit-product-errors'>-{error.split(":")[1]}</div>
                )
            })}
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
