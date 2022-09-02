import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from "react-router-dom";
import shopBackground from '../CSS/Images/new_shop.jpg'
import '../CSS/Shop.css'

const Shop = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)


  return (
    <div className='sell-product-main'>
      <div className='new-shop-name-outer'>
        <div className='sell-product-main-header'>Millions of shopper can't wait to see what you have in store</div>
        <button className='get-started-button'>Get started</button>
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
    </div>
  )
}

export default Shop
