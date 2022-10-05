import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findShop } from '../../store/shop';
import smoothShipping from '../CSS/Images/shop_smooth_shipping.svg'
import speedyReplies from '../CSS/Images/shop_speedy_replies.svg'
import starSeller from '../CSS/Images/shop_star_seller.svg'
import '../CSS/ProductsByShop.css'
import { getAllProducts } from '../../store/products';

const ProductsByShop = () => {
  const dispatch = useDispatch()
  const { shopName } = useParams()
  const shop = useSelector(state => Object.values(state.shop))
  const products = useSelector(state => Object.values(state.products))

  const shopProducts = products.filter((product) => product?.seller_id === shop[0]?.user_id)

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(findShop(shopName))
  }, [shopName])

  return (
    <>
      <div className='user-shop-main'>
        <div className='user-shop-upper'>
          <div className='user-shop-header'>
            <div className='user-shop-header-left'>
              <img src={shop[0]?.icon} className='shop-icon-img' alt='shop-icon'></img>
              <div className='user-shop-info-outer'>
                <div className='user-shop-name'>{shopName}</div>
                <div className='user-shop-title'>{shop[0]?.title}</div>
                <div className='user-shop-location'>{shop[0]?.location}</div>
                <div className='user-shop-star-seller'><img src={starSeller} className='star-seller-icon' alt='star-seller'></img>Star Sellar</div>
              </div>
            </div>
            <div className='user-shop-header-middle'>
              <div className='user-shop-feature'>
                <img src={smoothShipping}></img>
                <div className='user-shop-feature-title'>Smooth Shipping</div>
                <div className='user-shop-feature-caption'>Has a history of shipping on time with tracking.</div>
              </div>
              <div className='user-shop-feature'>
                <img src={speedyReplies}></img>
                <div className='user-shop-feature-title'>Speed replies</div>
                <div className='user-shop-feature-caption'>Has a history of replying to messages quickly.</div>
              </div>
            </div>
            <div className='user-shop-header-right'>
              <img src={shop[0]?.user[0]?.profile_pic} className='user-shop-profile-img'></img>
              <div className='user-shop-profile-name'>{shop[0]?.user[0]?.first_name}</div>
            </div>
          </div>
        </div>
        <div className='user-shop-main'>
          <div className='user-shop-caption'>Items</div>
          <div className='user-shop-products-main'>
            {shopProducts?.map((product, i) => {
              return (
                <Link to={`/products/${product?.id}`} key={i}>
                  <div className='user-shop-product-inner'>
                    <div className='user-shop-product-img-outer'>
                      {product?.images?.length > 0 && <img src={product?.images} className='user-shop-product-img' alt='product'></img>}
                    </div>
                    <div className='user-shop-product-name'>{product.name}</div>
                    <div className='user-shop-product-price'>${product?.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      <span className='user-shop-free-shipping'>FREE shipping</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsByShop
