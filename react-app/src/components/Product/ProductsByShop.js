import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findShop, updateShop } from '../../store/shop';
import smoothShipping from '../CSS/Images/shop_smooth_shipping.svg'
import speedyReplies from '../CSS/Images/shop_speedy_replies.svg'
import starSeller from '../CSS/Images/shop_star_seller.svg'
import '../CSS/ProductsByShop.css'
import { getAllProducts } from '../../store/products';
import editPencil from '../CSS/Images/edit_pencil.svg'
import { Modal } from '../Context/modal';
import { editUser } from '../../store/session';
import { getUsers } from '../../store/users';

const ProductsByShop = () => {
  const dispatch = useDispatch()
  const { shopName } = useParams()
  const user = useSelector(state => state.session.user)
  const shop = useSelector(state => Object.values(state.shop))
  const products = useSelector(state => Object.values(state.products))
  const shopProducts = products.filter((product) => product?.seller_id === shop[0]?.user_id)
  const [editShop, setEditShop] = useState(false)
  const [name, setName] = useState(shopName)
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [shopErrors, setShopErrors] = useState([])
  const [checkDuplicate, setCheckDuplicate] = useState(false)

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(findShop(shopName))

    if (shop) {
      setTitle(shop[0]?.title)
      setLocation(shop[0]?.location)
    }
  }, [shopName])


  useEffect(() => {
    const shopErrors = []
    let validChar = new RegExp(/^[A-Za-z]+$/)
    if (!validChar.test(name)) shopErrors.push('Shop Name: Shop Name must only contain alphabetical characters')
    if (name.split(" ").length > 1) shopErrors.push('Shop Name: Shop Name must not contain spaces')
    if (name.length < 4 || name.trim().length < 4) {
      shopErrors.push('Shop Name: Shop Name requires 4 characters minimum')
      setCheckDuplicate(false)
    }
    if (name.length > 30) shopErrors.push('Shop Name: Shop Name exceeds 30 character limit')

    if (checkDuplicate === true) {
      shopErrors.push('Shop Name: Shop Name is already in use')
    }

    if (title?.length > 100) shopErrors.push('Title: Title exceeds 100 character limit')
    if (location?.length > 60) shopErrors.push('Location: Location exceeds 60 character limit')

    setShopErrors(shopErrors)
  }, [name, title, location])


  const handleEditShop = () => {
    setEditShop(true)
  }

  const handleEditShopForm = async (e) => {
    e.preventDefault()

    if (shopErrors.length > 0) return

    const userData = {
      id: user.id,
      shop_name: name
    }

    const shopData = {
      shop_name: name,
      title,
      location
    }

    if (shopName !== name) {
      const userResponse = await dispatch(editUser(userData))

      if (userResponse) {
        await dispatch(getUsers())
      } else setCheckDuplicate(true)
    }

    const shopResponse = await dispatch(updateShop(shopData))

    if (shopResponse) {
      dispatch(findShop(name))
      setEditShop(false)
    }
  }

  return (
    <>
      {shop?.length > 0 && <div className='user-shop-main'>
        <div className='user-shop-upper'>
          <div className='user-shop-header'>
            <div className='user-shop-header-left'>
              <img src={shop[0]?.icon} className='shop-icon-img' alt='shop-icon'></img>
              <div className='user-shop-info-outer'>
                <div className='user-shop-name' onClick={() => handleEditShop()}>{shopName}
                  {user?.id === shop[0]?.user_id && <span className='user-shop-edit-outer'>
                    <span className='user-shop-edit'>Edit</span>
                    <img src={editPencil} className='user-shop-edit-pencil' alt='edit pencil'></img>
                  </span>}
                </div>
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
      </div>}
      {editShop && (
        <Modal onClose={() => setEditShop(false)}>
          <form onSubmit={handleEditShopForm} className='edit-form-outer'>
            <div className='edit-main'>
              <div className="edit-form-upper">
                <button className="edit-return-shop-button" onClick={() => { setEditShop(false) }}>Return to Shop</button>
                <div className='edit-header'>Update Shop</div>
              </div>
              <div>
                <label className='edit-label'>Shop Name *</label>
              </div>
              <div>
                <input
                  type='text'
                  className='edit-input-shop'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={31}
                />
              </div>
              <div>
                <label className='edit-label'>Title</label>
                <span className='edit-instructions'>-Keep it short and simple</span>
              </div>
              <div>
                <textarea
                  type='text'
                  className='edit-input-shop edit-textarea-shop'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={101}
                />
              </div>
              <div>
                <label className='edit-label'>Location</label>
                <span className='edit-instructions'>-Tell others where you're located</span>
              </div>
              <div>
                <input
                  type='text'
                  className='edit-input-shop'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  maxLength={61}
                />
              </div>
              <div className='edit-save-button-outer'>
                <button type="submit" className='edit-save-button'>Save and Update</button>
              </div>
            </div>
          </form>
        </Modal>
      )}
    </>
  )
}

export default ProductsByShop
