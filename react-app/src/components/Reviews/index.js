import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../Context/modal";
import '../CSS/Reviews.css'
import unfilledStar from '../CSS/Images/review-star-grey.svg'
import filledStar from '../CSS/Images/review-star-black.svg'
import { addNewReview, getAllUserReviews, updateReview } from "../../store/reviews";

const Reviews = ({ productId, purchaseId, reviewStars, setReviewStars, setAddReview, formatDate, editReview, setEditReview, reviewId }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const products = useSelector(state => state.products)
  const purchases = useSelector(state => state.purchases)
  const userReviews = useSelector(state => state.reviews)
  const [content, setContent] = useState(userReviews[productId] ? userReviews[productId].content : "")
  const [errors, setErrors] = useState([])
  const [ratedStar1, setRatedStar1] = useState(false)
  const [ratedStar2, setRatedStar2] = useState(false)
  const [ratedStar3, setRatedStar3] = useState(false)
  const [ratedStar4, setRatedStar4] = useState(false)
  const [ratedStar5, setRatedStar5] = useState(false)

  useEffect(() => {
    if (reviewStars >= 1) setRatedStar1(true)
    if (reviewStars >= 2) setRatedStar2(true)
    if (reviewStars >= 3) setRatedStar3(true)
    if (reviewStars >= 4) setRatedStar4(true)
    if (reviewStars >= 5) setRatedStar5(true)
  }, [reviewStars])

  useEffect(() => {
    const errors = []
    if (content.length < 10) errors.push("Content: Review must be at least 10 characters long")
    if (content.length > 1000) errors.push("Content: Review exceeds 1000 characters")
    setErrors(errors)
  }, [content])


  const changeReviewStars = (num) => {
    if (num >= 1) {
      setReviewStars(1)
      setRatedStar1(true)
      setRatedStar2(false)
      setRatedStar3(false)
      setRatedStar4(false)
      setRatedStar5(false)
    }
    if (num >= 2) {
      setReviewStars(2)
      setRatedStar2(true)
    }
    if (num >= 3) {
      setReviewStars(3)
      setRatedStar3(true)
    }
    if (num >= 4) {
      setReviewStars(4)
      setRatedStar4(true)
    }
    if (num >= 5) {
      setReviewStars(5)
      setRatedStar5(true)
    }
  }


  const handleReview = async (e) => {
    e.preventDefault()

    if (errors.length > 0) return

    if (editReview) {
      const reviewData = {
        review_id: reviewId,
        product_id: productId,
        stars: reviewStars,
        content
      }

      dispatch(updateReview(reviewData))
      dispatch(getAllUserReviews())
      setEditReview(false)
      setAddReview(false)


    } else {
      const reviewData = {
        user_id: user.id,
        product_id: productId,
        stars: reviewStars,
        content
      }

      dispatch(addNewReview(reviewData))
      dispatch(getAllUserReviews())
      setAddReview(false)
    }
  }

  return (
    <>
      <Modal onClose={() => setAddReview(false)}>
        <form onSubmit={handleReview} className='create-review-form'>
          <div className="review-return-outer">
            <button className="review-return-button" onClick={() => { setAddReview(false) }}>Return to Purchases</button>
          </div>
          <div className="create-review-header">{editReview ? "Update Review" : "Leave a Review"}</div>
          <div className="review-product-upper">
            <div className="review-product-img-outer"><img src={products[productId].images[0]} className="review-product-img"></img></div>
            <div className="review-product-right">
              <div className="review-product-right-name">{products[productId].name}</div>
              <div className="review-product-right-shop-name">Purchased from
                <span className="review-inner-text">&nbsp;{purchases[purchaseId].shop_name}</span> on
                <span className="review-inner-text">&nbsp;{formatDate(purchases[purchaseId].created_at)}</span>
              </div>
            </div>
          </div>
          <div className="create-review-stars-outer">
            <div className="create-stars-review-header">My Review Rating *</div>
            <img src={ratedStar1 ? filledStar : unfilledStar} className='create-stars-display' onClick={() => changeReviewStars(1)}></img>
            <img src={ratedStar2 ? filledStar : unfilledStar} className='create-stars-display' onClick={() => changeReviewStars(2)}></img>
            <img src={ratedStar3 ? filledStar : unfilledStar} className='create-stars-display' onClick={() => changeReviewStars(3)}></img>
            <img src={ratedStar4 ? filledStar : unfilledStar} className='create-stars-display' onClick={() => changeReviewStars(4)}></img>
            <img src={ratedStar5 ? filledStar : unfilledStar} className='create-stars-display' onClick={() => changeReviewStars(5)}></img>
          </div>
          <div className="create-review-instructions">
            <div className="create-review-instructions-header">Helpful reviews on Etsy mention:</div>
            <div className="create-review-instructions-section">- the quality of the item</div>
            <div className="create-review-instructions-section">- if the item matched the description</div>
            <div className="create-review-instructions-section">- if the item met your expectations</div>
          </div>
          <div className="create-review-content-outer">
            <label className="create-review-content-header">Review *</label>
            {errors?.map((error, ind) => {
              if (error.split(":")[0] === 'Content')
                return (
                  <div key={ind} className='create-review-errors'>-{error.split(":")[1]}</div>
                )
            })}
            <textarea
              type='text'
              className='create-review-text-area'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength="1001"
            />
          </div>
          <div className="create-review-button-outer">
            <button className="create-review-button">{editReview ? "Update review" : "Submit review"}</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default Reviews
