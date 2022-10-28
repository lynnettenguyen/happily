import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from '../Context/modal';
import { cancelPurchase, getAllPurchases } from "../../store/purchases";
import { getAllUserReviews, removeReview } from "../../store/reviews";
import { getAllProducts } from "../../store/products";
import '../CSS/ShopManager.css'
import '../CSS/Purchases.css'
import unfilledStar from '../CSS/Images/review-star-grey.svg'
import filledStar from '../CSS/Images/review-star-black.svg'
import Reviews from "../Reviews";
import { ratingFiveStar, ratingFourStar, ratingThreeStar, ratingTwoStar, ratingOneStar } from "../Product/Rating";

const Purchases = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const userReviews = useSelector(state => state.reviews)
  const products = useSelector(state => state.products)
  const purchases = useSelector(state => Object.values(state.purchases))
  const [ratedStar1, setRatedStar1] = useState(false)
  const [ratedStar2, setRatedStar2] = useState(false)
  const [ratedStar3, setRatedStar3] = useState(false)
  const [ratedStar4, setRatedStar4] = useState(false)
  const [ratedStar5, setRatedStar5] = useState(false)
  const [cancelConfirmation, setCancelConfirmation] = useState(false)
  const [removeConfirmation, setRemoveConfirmation] = useState(false)
  const [purchaseId, setPurchaseId] = useState()
  const [orderNumber, setOrderNumber] = useState()
  const [productName, setProductName] = useState()
  const [addReview, setAddReview] = useState(false)
  const [reviewStars, setReviewStars] = useState(false)
  const [productId, setProductId] = useState([])
  const [refreshReview, setRefreshReview] = useState(false)
  const [editReview, setEditReview] = useState(false)
  const [reviewId, setReviewId] = useState()

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getAllPurchases(user.id))
    dispatch(getAllUserReviews())
    setRefreshReview(false)
  }, [addReview, refreshReview])


  const formatDate = (dateTime) => {
    let month = dateTime.split(" ")[2]
    let day = dateTime.split(" ")[1]
    if (day[0] === '0') day = day.slice(1)
    let year = dateTime.split(" ")[3]

    return `${month} ${day}, ${year}`
  }

  const generatedShipped = (dateTime) => {
    const date = new Date(dateTime)
    date.setDate(date.getDate() + 3);
    return (new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date));
  }

  const generateDelivery = (dateTime) => {
    const date = new Date(dateTime)
    date.setDate(date.getDate() + 7);
    return (new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date));
  }

  const checkDelivered = (dateTime) => {
    const date = new Date(dateTime)
    date.setDate(date.getDate() + 7);
    if (date < new Date()) {
      return "delivered"
    }
  }

  const checkShipped = (dateTime) => {
    const date = new Date(dateTime)
    date.setDate(date.getDate() + 3);
    if (date < new Date()) {
      return "shipped"
    }
  }

  const convertTotal = (price) => {
    return price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const cancelOrder = (id, num, name) => {
    setPurchaseId(id)
    setOrderNumber(num)
    setProductName(name)
    setCancelConfirmation(true)
  }

  const confirmCancel = () => {
    dispatch(cancelPurchase(purchaseId))
    setCancelConfirmation(false)
  }

  const handleStarOn = (num, id) => {
    setPurchaseId(id)
    if (num >= 1) setRatedStar1(true)
    if (num >= 2) setRatedStar2(true)
    if (num >= 3) setRatedStar3(true)
    if (num >= 4) setRatedStar4(true)
    if (num >= 5) setRatedStar5(true)
  }

  const handleStarOff = (num, id) => {
    setPurchaseId(id)
    if (num >= 1) setRatedStar1(false)
    if (num >= 2) setRatedStar2(false)
    if (num >= 3) setRatedStar3(false)
    if (num >= 4) setRatedStar4(false)
    if (num >= 5) setRatedStar5(false)
  }

  const handleReview = (num, itemId, orderId) => {
    setAddReview(true);
    setProductId(itemId)
    setPurchaseId(orderId)
    setReviewStars(num)
  }

  const handleEditReview = (review, id) => {
    setProductId(review.product_id)
    setPurchaseId(id)
    setReviewStars(review.stars)
    setReviewId(review.id)
    setEditReview(true);
    setAddReview(true);
  }

  const handleRemoveConfirmation = (id) => {
    setRemoveConfirmation(true)
    setReviewId(id)
  }

  const handleDeleteReview = () => {
    dispatch(removeReview(reviewId))
    setRemoveConfirmation(false)
    setRefreshReview(true)
  }

  const stars = (num) => {

    let starCount
    if (num === 5) starCount = ratingFiveStar;
    if (num === 4) starCount = ratingFourStar;
    if (num === 3) starCount = ratingThreeStar;
    if (num === 2) starCount = ratingTwoStar;
    if (num === 1) starCount = ratingOneStar;

    return (
      <>
        {starCount.map((star, i) => {
          return (
            <>
              <img src={star} key={i} className='user-review-star-display' alt='star'></img>
            </>
          )
        })}
      </>
    )
  }


  return (
    <div className="purchases-main">
      <div className="purchase-header-main">
        <div className="purchase-header">Purchases</div>
      </div>
      {purchases.length > 0 ? <div className="purchases-details-outer">
        {purchases?.reverse().map((purchase, i) => {
          return (
            <div className="purchases-details-main" key={i}>
              <div div className="purchases-details-left">
                <div className="purchases-upper-outer">
                  <div className="purchase-shop-total">
                    <div className="purchase-shop-name-outer">
                      <div className="purchase-shop-order">Order #{purchase.order_number.toUpperCase()}</div>
                      Purchased from <Link to={`/shop/${purchase?.shop_name}`}><span className="purchase-content-shop">{purchase?.shop_name}</span></Link> on <span className="purchase-content">{formatDate(purchase?.created_at)}</span></div>
                    {purchase.product_total !== purchase.purchase_total &&
                      <div className="purchase-item-total">This item was part of a <span className="purchase-content">${convertTotal(purchase?.purchase_total * 1.09125)}</span> purchase.</div>}
                  </div>
                  <div className="purchase-product-total"><span className="purchase-content">${convertTotal(purchase?.product_total * 1.09125)}</span></div>
                </div>
                <div className="purchases-bottom-outer">
                  <div className="purchase-product-img-outer">
                    <Link to={`/products/${purchase.product_id}`}>
                      {products[purchase.product_id]?.images.length > 0 && <img src={products[purchase.product_id]?.images[0]} className='purchase-product-img' alt='product'></img>}
                    </Link>
                  </div>
                  <div className="purchase-product-info">
                    <Link to={`/products/${purchase.product_id}`}>
                      <div className="purchase-product-name">{products[purchase.product_id]?.name}</div>
                    </Link>
                    {checkDelivered(purchase?.created_at) === "delivered" ?
                      <>
                        {!Object.keys(userReviews).includes((purchase.product_id).toString()) ?
                          <div className="purchase-product-review-outer">
                            <div className="purchase-review-header">Review this Item</div>
                            <img src={ratedStar1 && purchase.id === purchaseId ? filledStar : unfilledStar} onMouseOver={() => handleStarOn(1, purchase.id)} onMouseLeave={() => handleStarOff(1, purchase.id)} onClick={() => handleReview(1, purchase.product_id, purchase.id)} className='purchase-review-star' alt='star'></img>
                            <img src={ratedStar2 && purchase.id === purchaseId ? filledStar : unfilledStar} onMouseOver={() => handleStarOn(2, purchase.id)} onMouseLeave={() => handleStarOff(2, purchase.id)} onClick={() => handleReview(2, purchase.product_id, purchase.id)} className='purchase-review-star' alt='star'></img>
                            <img src={ratedStar3 && purchase.id === purchaseId ? filledStar : unfilledStar} onMouseOver={() => handleStarOn(3, purchase.id)} onMouseLeave={() => handleStarOff(3, purchase.id)} onClick={() => handleReview(3, purchase.product_id, purchase.id)} className='purchase-review-star' alt='star'></img>
                            <img src={ratedStar4 && purchase.id === purchaseId ? filledStar : unfilledStar} onMouseOver={() => handleStarOn(4, purchase.id)} onMouseLeave={() => handleStarOff(4, purchase.id)} onClick={() => handleReview(4, purchase.product_id, purchase.id)} className='purchase-review-star' alt='star'></img>
                            <img src={ratedStar5 && purchase.id === purchaseId ? filledStar : unfilledStar} onMouseOver={() => handleStarOn(5, purchase.id)} onMouseLeave={() => handleStarOff(5, purchase.id)} onClick={() => handleReview(5, purchase.product_id, purchase.id)} className='purchase-review-star' alt='star'></img>
                          </div> :
                          <div className="purchase-user-review-outer">
                            <div className="purchase-user-review-upper">
                              <span className="purchase-user-review-header">Your Review</span>
                              <span>{stars(userReviews[purchase.product_id]?.stars)}</span>
                            </div>
                            <div className="purchase-user-review-content">{userReviews[purchase.product_id]?.content}</div>
                            <div className="purchase-review-buttons-outer">
                              <button onClick={() => handleEditReview(userReviews[purchase.product_id], purchase.id)} className='purchase-review-edit-button'>Edit</button>
                              <button onClick={() => handleRemoveConfirmation(userReviews[purchase.product_id].id)} className='purchase-review-delete-button'>Delete</button>
                            </div>
                          </div>
                        }
                      </> : <>
                        <div className="purchase-product-review-outer">
                          <div className="purchase-review-header">Item review available after delivery on {generateDelivery(purchase?.created_at)}  </div>
                        </div>
                      </>
                    }
                  </div>
                </div>
              </div>
              <div className="purchase-shipping-details">
                <div className="purchase-dates-outer">
                  {checkDelivered(purchase?.created_at) === "delivered" ?
                    <>
                      <div className="purchase-shipped-upper">
                        <span className="purchase-shipping-header">Delivered</span>
                        <div className="purchase-shipping-date"> on {generateDelivery(purchase?.created_at)}</div>
                      </div>
                    </>
                    : <>
                      <div className="cancel-order-button-outer"><button className="cancel-order-button" onClick={() => cancelOrder(purchase?.id, purchase?.order_number, products[purchase.product_id]?.name)} disabled={checkShipped(purchase?.created_at) === 'shipped'}>Cancel Order</button>
                      </div>
                      <div className="purchase-shipped-upper">
                        <span className="purchase-shipping-header">Ship by</span>
                        <span className="purchase-shipping-date">{generatedShipped(purchase?.created_at)}</span>
                      </div>
                      <div className='purchase-delivery-outer'>
                        <span className="purchase-estimated-delivery">Estimated delivery:</span>
                        <span className="purchase-delivery-date">{generateDelivery(purchase?.created_at)}</span>
                      </div>
                    </>
                  }
                </div>
                <div className="order-receipt-outer">
                  <div className="order-receipt-upper">
                    <div className="order-receipt-labels">
                      <div className="order-label">Item Total</div>
                      <div className="order-label">Shipping</div>
                      <div className="order-label">Sales Tax</div>
                    </div>
                    <div className="order-receipt-price">
                      <div className="order-price">${convertTotal(purchase?.product_total)}</div>
                      <div className="order-price-free">FREE</div>
                      <div className="order-price">${convertTotal(purchase?.product_total * 0.09125)}</div>
                    </div>
                  </div>
                  <div className="order-receipt-bottom">
                    <div className="order-label-total">Order Total</div>
                    <div className="order-price-total">${convertTotal(purchase?.product_total * 1.09125)}</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        {cancelConfirmation && (
          <Modal onClose={() => setCancelConfirmation(false)}>
            <div className="cancel-confirm-outer">
              <button onClick={() => setCancelConfirmation(false)} className='cancel-return-button'>Return to Purchases</button>
              <div className="cancel-message">Cancel Order <span className="cancel-order-number">#{orderNumber.toUpperCase()}</span>?</div>
              <div className="cancel-product-name"><span className="cancel-confirm">Product description: </span>{productName}</div>
              <div className="cancel-confirm-button-outer">
                <button onClick={confirmCancel} className='cancel-confirm-button'>Confirm</button>
              </div>
            </div>
          </Modal>
        )}
        {removeConfirmation && (
          <Modal onClose={() => setRemoveConfirmation(false)}>
            <div className="remove-confirm-outer">
              <button onClick={() => setRemoveConfirmation(false)} className='cancel-return-button'>Return to Purchases</button>
              <div className="cancel-message">Permanently remove selected review?</div>
              <div className="cancel-confirm-button-outer">
                <button onClick={handleDeleteReview} className='cancel-confirm-button'>Confirm</button>
              </div>
            </div>
          </Modal>
        )}
        {addReview && <Reviews reviewStars={reviewStars} setReviewStars={setReviewStars} productId={productId} purchaseId={purchaseId} setAddReview={setAddReview} formatDate={formatDate} editReview={editReview} setEditReview={setEditReview} reviewId={reviewId} />}
      </div> : <div className="no-purchases-main">No Purchases? &nbsp;<Link to='/' className="no-purchases-continue">Continue Browsing</Link>!</div>}
    </div>
  )
}

export default Purchases
