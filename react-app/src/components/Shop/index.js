import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from "react-router-dom";
import { authenticate, editUser } from '../../store/session';
import shopBackground from '../CSS/Images/new_shop.jpg'
import '../CSS/Shop.css'
import ImageUpload from './ImageUpload';

const Shop = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const categories = useSelector(state => Object.values(state.categories))
  const [page, setPage] = useState(0)
  const [shopName, setShopName] = useState(user.shop_name ? user.shop_name : "")
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()

  const handleUserSubmit = async (e) => {
    e.preventDefault()

    const userData = {
      id: user.id,
      shop_name: shopName
    }

    const response = await dispatch(editUser(userData))
    if (response) {
    }
  }

  const handleProductSubmit = async (e) => {
    e.preventDefault()
  }

  const handleImageSubmit = async (e) => {
    e.preventDefault()
  }

  const formButton = (
    <button type='submit' className='continue-button' onClick={() => setPage(page + 1)}>Save and Continue</button>
  )

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
        {page === 1 && <>
      <form onSubmit={handleUserSubmit} className={page < 2 ? "sell-product-form" : "hidden"}>
          <div className='new-shop-name-outer'>
            <label className='sell-product-name-shop-label'>Name your shop</label>
            <input
              type='text'
              className='user-form-input'
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
            />
            <button type="submit">Submit</button>
            {/* <div className='continue-button-outer'>{formButton}</div> */}
          </div>
      </form>
        </>
        }
      <form onSubmit={handleProductSubmit} className={page < 3 ? "sell-product-form" : "hidden"}>
        {page == 2 &&
          <>
            <div className='new-shop-name-outer'>
              <div className='product-form-header'>Create a Listing</div>
              <div className='product-form-field'>
                <label className='sell-product-label'>Title</label>
                <input
                  type='text'
                  className='user-form-input'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='product-form-field'>
                <label className='sell-product-label'>Category</label>
                <select htmlFor='category' name='category'>
                  {categories?.map((category) => {
                    return (
                      <option value={category.name}>{category.display_name}</option>
                    )
                  })}
                </select>
              </div>
              <div className='product-form-field'>
                <label className='sell-product-label'>Price</label>
                <input
                  type='text'
                  className='user-form-input'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className='product-form-field'>
                <label className='sell-product-label'>Description</label>
                <input
                  type='text'
                  className='user-form-input'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className='continue-button-outer'>{formButton}</div>
            </div>
          </>}
      </form>
      <form onSubmit={handleImageSubmit} className={page < 4 ? "sell-product-form" : "hidden"}>
        {page == 3 &&
          <>
            <div className='add-images-outer'>
              <ImageUpload />
              <div className='continue-button-outer'>{formButton}</div>
            </div>
          </>}
      </form>
    </div >
  )
}

export default Shop
