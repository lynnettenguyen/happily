import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewProduct } from '../../store/products';
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
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState('Arches')

  const handleUserSubmit = async (e) => {
    e.preventDefault()

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

    console.log(productData)

    const response = await dispatch(addNewProduct(productData))
    if (response) {
      setProductId(response.id)
      setPage(3)
    }
  }

  return (
    <div className='sell-product-main'>
      {page === 0 && <>
        <div className='new-shop-name-outer'>
          <div className='sell-product-main-header'>Millions of shopper can't wait to see what you have in store</div>
          <button className='get-started-button' onClick={() => setPage(1)}>Get started</button>
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
          <div className='new-shop-name-outer'>
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
      <form onSubmit={handleProductSubmit}>
        {page === 2 &&
          <>
            <div className='new-shop-name-outer'>
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
                      {categories?.map((category) => {
                        return (
                          <option value={category.name} className='product-form-options'>{category.display_name}</option>
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
                    className='product-form-input'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    min="0"
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
          </>}
      </form>
      {page === 3 &&
        <>
          <div className='add-images-outer'>
            <ImageUpload productId={productId} />
          </div>
        </>}
    </div >
  )
}

export default Shop
