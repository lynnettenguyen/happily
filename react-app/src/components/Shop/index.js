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
      <img src={shopBackground} className='shop-background-img'></img>
        <div className='sell-product-main-header'>Millions of shopper can't wait to see what you have in store</div>
      </div>
      <div className='sell-product-bottom'>
        <div>
          <img src="https://img0.etsystatic.com/site-assets/sell-page/Sell_Page_Icon_Great_Value.svg" width="150" alt=""></img>
        </div>
        <div>
          <img src="https://img0.etsystatic.com/site-assets/sell-page/Sell_Page_Icon_Tools.svg" width="150" alt=""></img>
        </div>
        <div>
          <img src="https://img0.etsystatic.com/site-assets/sell-page/Sell_Page_Icon_Education.svg" width="150" alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default Shop
