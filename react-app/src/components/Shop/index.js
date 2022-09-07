import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewProduct, getAllProducts } from '../../store/products';
import { editUser } from '../../store/session';
import '../CSS/Shop.css'
import ImageUpload from './ImageUpload';

const Shop = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const categories = useSelector(state => Object.values(state.categories))
  const [productId, setProductId] = useState()
  const [page, setPage] = useState(0)
  const [shopName, setShopName] = useState(user.shop_name ? user.shop_name : "")
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [errors, setErrors] = useState([])

  useEffect(() => {
    dispatch(getAllProducts())

    const errors = []
    if (name.length < 10) errors.push('Name : Title requires 10 characters minimum')
    if (name.length > 255) errors.push('Name : Title exceeds 255 character limit')
    if (category.length === 0) errors.push('Category : Category selection is required')
    if (price <= 0.99 || price >= 1000000) errors.push('Price : Price required between $1.00 and $1,000,000 required')
    if (description.length < 10) errors.push('Description : Description requires 10 characters minimum')
    if (description.length > 1000) errors.push('Description : Description exceeds 1000 character limit')
    setErrors(errors)
  }, [name, category, price, description])

  console.log(errors)


  const checkShopName = () => {
    if (shopName) setPage(2)
    else setPage(1)
  }

  const handleUserSubmit = async (e) => {
    e.preventDefault()

    if (errors.length >= 0) {
      return
    }

    const userData = {
      id: user.id,
      shop_name: shopName
    }

    const response = await dispatch(editUser(userData))
    if (response) {
      setPage(2)
    }
  }

  const handleProductSubmit = async (e) => {
    e.preventDefault()

    const productData = {
      name,
      price,
      category,
      description
    }

    const response = await dispatch(addNewProduct(productData))
    if (response) {
      setProductId(response.id)
      setPage(3)
    }
  }


  return (
    <div className='sell-product-main'>
      {page === 0 && <>
        <div className='main-shop-outer'>
          <div className='sell-product-main-header'>Millions of shopper can't wait to see what you have in store</div>
          <button className='get-started-button' onClick={checkShopName}>Get started</button>
        </div>
        <div className='sell-product-bottom'>
          <div className='product-bottom-icons'>
            <div className='product-bottom-inner'>
              <div><img src="https://img0.etsystatic.com/site-assets/sell-page/Sell_Page_Icon_Great_Value.svg" className='bottom-icon-images' alt=""></img></div>
              <div className='product-bottom-header'>Great value</div>
            </div>
          </div>
          <div className='product-bottom-icons'>
            <div className='product-bottom-inner'>
              <div><img src="https://img0.etsystatic.com/site-assets/sell-page/Sell_Page_Icon_Tools.svg" className='bottom-icon-images' alt=""></img></div>
              <div className='product-bottom-header'>Powerful tools</div>
            </div>
          </div>
          <div className='product-bottom-icon-last'>
            <div className='product-bottom-inner'>
              <div><img src="https://img0.etsystatic.com/site-assets/sell-page/Sell_Page_Icon_Education.svg" className='bottom-icon-images' alt=""></img></div>
              <div className='product-bottom-header'>Support and education</div>
            </div>
          </div>
        </div>
      </>
      }
      <form onSubmit={handleUserSubmit}>
        {page === 1 && <>
          <div className='main-shop-outer'>
            <div className='first-page-main'>
              <div className='first-page-main-upper'>
                <label className='sell-product-name-shop-label'>Name your shop</label>
                <div className='sell-product-caption'>We find sellers often draw inspiration from what they sell or their style, pretty much anything goes.</div>
                <input
                  type='text'
                  className='user-form-input'
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                />
              </div>
              <div className='save-button-outer'>
                <button type="submit" className='save-button'>Submit</button>
              </div>
            </div>
          </div>
        </>
        }
      </form>
      {page === 2 &&
        <form onSubmit={handleProductSubmit}>
          <div className='main-shop-outer'>
            <div className='product-form-main'>
              <div className='product-form-header'>Create a Listing</div>
              <div className='product-form-field'>
                <div>
                  <label className='sell-product-label'>Title *</label>
                  <span className='sell-product-instructions'>Include keywords that buyers would use to search for your item.</span>
                </div>
                <div>
                  <input
                    type='text'
                    className='product-form-input'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className='product-form-field'>
                <div>
                  <label className='sell-product-label'>Category *</label>
                  <span className='sell-product-instructions'>Select a category to help shoppers find your product.</span>
                </div>
                <div className='select-outer'>
                  <select
                    htmlFor='category'
                    name='category'
                    className='product-form-select'
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option disabled selected value={category}>-- Select a Category --</option>
                    {categories?.map((category) => {
                      return (
                        <option
                          value={category.name}
                          className='product-form-options'>{category.display_name}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <div className='product-form-field'>
                <div>
                  <label className='sell-product-label'>Price *</label>
                  <span className='sell-product-instructions'>Remember to factor in the cost of materials, labor, and other business expenses.</span>
                </div>
                <input
                  type='number'
                  step="any"
                  className='product-form-input'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className='product-form-field'>
                <div>
                  <label className='sell-product-label'>Description *</label>
                  <span className='sell-product-instructions'>Start with a brief overview that describes your item's finest features.</span>
                </div>
                <textarea
                  type='text'
                  className='product-form-text-area'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className='save-button-outer'>
                <button type="submit" className='product-save-button'>Save and Continue</button>
              </div>
            </div>
          </div>
        </form>
      }
      {page === 3 &&
        <div className='main-shop-outer'>
          <ImageUpload productId={productId} />
        </div>
      }
    </div >
  )
}

export default Shop
