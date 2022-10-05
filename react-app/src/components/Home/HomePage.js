import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { findProductById, getAllProducts } from '../../store/products'
import { getUsers } from '../../store/users'
import '../CSS/HomePage.css'
import Footer from '../Navigation/Footer'
import rightArrow from '../CSS/Images/right-arrow.svg'

const HomePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.session.user)
  const product = useSelector(state => state.products)
  const products = useSelector(state => Object.values(state.products))
  const users = useSelector(state => state.users)

  const unSortProducts = products.sort(() => 0.5 - Math.random())
  const displayedProducts = unSortProducts.slice(0, 8)
  const sponsoredProducts = unSortProducts.slice(8, 13)
  const uniqueProducts = unSortProducts.slice(13, 19)

  const unSortUserIds = [1, 2, 3, 5, 6, 7, 8].sort(() => 0.5 - Math.random())
  const shopProducts1 = unSortProducts.filter((product) => product.seller_id === unSortUserIds[0])
  const shopProducts2 = unSortProducts.filter((product) => product.seller_id === unSortUserIds[1])
  const shopProducts3 = unSortProducts.filter((product) => product.seller_id === unSortUserIds[2])

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getUsers())
  }, [])

  const productDetails = (id) => {
    dispatch(findProductById(id))
    dispatch(getUsers())
  }

  return (
    <>
      {user ?
        <div className='home-header'> Welcome back,&nbsp; {user.first_name} </div> :
        <div className='home-header'> Find everything you need for an unforgettable occasion</div>}
      <div className='home-featured-circles-outer'>
        <div className='homepage-back-drop'></div>
        <div className='feature-circle-main'>
          <Link to='/products/9'>
            <div className='featured-img-outer'><img src={product[9] ? product[9]?.images[0] : "https://knotsy.s3.us-west-1.amazonaws.com/p9.1.webp"} className='featured-img' alt='featured'></img></div>
          </Link>
          <div className='featured-name'>Acrylic Sign</div>
        </div>
        <div className='feature-circle-main'>
          <Link to='/products/106'>
            <div className='featured-img-outer'><img src={product[106] ? product[106]?.images[0] : "https://knotsy.s3.us-west-1.amazonaws.com/p106.1.webp"} className='featured-img' alt='featured'></img></div>
          </Link>
          <div className='featured-name'>Toasting Flute</div>
        </div>
        <div className='feature-circle-main'>
          <Link to='/products/99'>
            <div className='featured-img-outer'><img src={product[99] ? product[99]?.images[0] : "https://knotsy.s3.us-west-1.amazonaws.com/p99.1.webp"} className='featured-img' alt='featured'></img></div>
          </Link>
          <div className='featured-name'>Diamond Ring</div>
        </div>
        <div className='feature-circle-main'>
          <Link to='/products/103'>
            <div className='featured-img-outer'><img src={product[103] ? product[103]?.images[0] : "https://knotsy.s3.us-west-1.amazonaws.com/p103.1.webp"} className='featured-img' alt='featured'></img></div>
          </Link>
          <div className='featured-name'>Cake Topper</div>
        </div>
        <div className='feature-circle-main'>
          <Link to='/products/65'>
            <div className='featured-img-outer'><img src={product[65] ? product[65]?.images[0] : "https://knotsy.s3.us-west-1.amazonaws.com/p65.1.webp"} className='featured-img' alt='featured'></img></div>
          </Link>
          <div className='featured-name'>Guestbook</div>
        </div>
        <div className='feature-circle-main'>
          <Link to='/products/22'>
            <div className='featured-img-outer'><img src={product[22] ? product[22]?.images[0] : "https://knotsy.s3.us-west-1.amazonaws.com/p22.4.webp"} className='featured-img' alt='featured'></img></div>
          </Link>
          <div className='featured-name'>Seating Chart</div>
        </div>
      </div>

      <div className='display-product-main'>
        {displayedProducts?.map((product, i) => {
          return (
            <div className={`display-product-outer img${i}`} key={i}>
              <Link to={`/products/${product.id}`} onClick={() => productDetails(product.id)}>
                <div className='display-img-outer' >
                  {product?.images?.length > 0 && <img src={product?.images[0]} className={`display-product-img img${i}`} alt='product'></img>}
                </div>
                <div className='display-product-price'>${product?.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
              </Link>
            </div>
          )
        })}
      </div >
      <div className='sponsored-products-main'>
        <div className='sponsored-product-header'>
          <div className='sponsored-product-top-outer'>Sponsored by <span className='sponsored-product-top'>Happily sellers</span></div>
          <div className='sponsored-product-caption'>Fun fact: behind every sponsored item there is an Happily seller hoping you'll check out their shop</div>
        </div>
        {sponsoredProducts?.map((product, i) => {
          return (
            <div className={`sponsored-product-outer s-img${i}`} key={i}>
              <Link to={`/products/${product.id}`} onClick={() => productDetails(product.id)}>
                <div className='sponsored-img-outer'>
                  {product?.images?.length > 0 && <img src={product?.images[0]} className={`sponsored-product-img s-img${i}`} alt='product'></img>}
                </div>
                <div className='sponsored-product-price'>${product?.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
              </Link>
            </div>
          )
        })}
      </div>
      <div className='unique-products-main'>
        <div className='unique-products-header'>Discover unique hand-picked items<img className='unique-right-arrow' src={rightArrow} onClick={() => history.push(`/products/${uniqueProducts[0].id}`)}></img></div>
        {uniqueProducts?.map((product, i) => {
          return (
            <div className={`unique-product-outer u-img${i}`} key={i}>
              <Link to={`/products/${product.id}`} onClick={() => productDetails(product.id)}>
                <div className='unique-img-outer'>
                  {product?.images?.length > 0 && <img src={product?.images[0]} className={`unique-product-img u-img${i}`} alt='product'></img>}
                </div>
                <div className='unique-product-price'>${product?.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
              </Link>
            </div>
          )
        })}
      </div>
      <div className='shop-products-outer'>
        <div className='shop-product-top'>Shops we think you'll love</div>
        <div className='shop-product-caption'>Recommended by Happily editors</div>
        <div className='shop-products-main'>
          {shopProducts1?.slice(0, 4).map((product, i) => {
            return (
              <div className={`shop-product-outer sp-img${i}`} key={i}>
                <Link to={`/products/${product.id}`} onClick={() => productDetails(product.id)}>
                  <div className='shop-img-outer'>
                    {product?.images?.length > 0 && <img src={product?.images[0]} className={`shop-product-img sp-img${i}`} alt='product'></img>}
                  </div>
                </Link>
              </div>
            )
          })}
          <Link to={`/shop/${users[unSortUserIds[0]]?.shop_name}`}>
            <div className='shop-product-user'>
              <img src={users[unSortUserIds[0]]?.profile_pic} alt='' className='shop-product-user-img'></img>
              <div className='shop-product-details'>
                <div className='shop-product-shop-name'>{users[unSortUserIds[0]]?.shop_name}</div>
                <div className='shop-product-items'>{shopProducts1.length} items</div>
              </div>
            </div>
          </Link>
        </div>
        <div className='shop-products-main'>
          {shopProducts2?.slice(0, 4).map((product, i) => {
            return (
              <div className={`shop-product-outer sp-img${i}`} key={i}>
                <Link to={`/products/${product.id}`} onClick={() => productDetails(product.id)}>
                  <div className='shop-img-outer'>
                    {product?.images?.length > 0 && <img src={product?.images[0]} className={`shop-product-img sp-img${i}`} alt='product'></img>}
                  </div>
                </Link>
              </div>
            )
          })}
          <Link to={`/shop/${users[unSortUserIds[1]]?.shop_name}`}>
            <div className='shop-product-user'>
              <img src={users[unSortUserIds[1]]?.profile_pic} alt='' className='shop-product-user-img'></img>
              <div className='shop-product-details'>
                <div className='shop-product-shop-name'>{users[unSortUserIds[1]]?.shop_name}</div>
                <div className='shop-product-items'>{shopProducts2.length} items</div>
              </div>
            </div>
          </Link>
        </div>
        <div className='shop-products-main'>
          {shopProducts3?.slice(0, 4).map((product, i) => {
            return (
              <div className={`shop-product-outer sp-img${i}`} key={i}>
                <Link to={`/products/${product.id}`} onClick={() => productDetails(product.id)}>
                  <div className='shop-img-outer'>
                    {product?.images?.length > 0 && <img src={product?.images[0]} className={`shop-product-img sp-img${i}`} alt='product'></img>}
                  </div>
                </Link>
              </div>
            )
          })}
          <Link to={`/shop/${users[unSortUserIds[2]]?.shop_name}`}>
            <div className='shop-product-user'>
              <img src={users[unSortUserIds[2]]?.profile_pic} alt='' className='shop-product-user-img'></img>
              <div className='shop-product-details'>
                <div className='shop-product-shop-name'>{users[unSortUserIds[2]]?.shop_name}</div>
                <div className='shop-product-items'>{shopProducts3.length} items</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomePage;
