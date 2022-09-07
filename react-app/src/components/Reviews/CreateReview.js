import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../Context/modal";


const CreateReview = ({ productId, purchaseId, reviewStars, setAddReview, formatDate }) => {
  const products = useSelector(state => state.products)
  const purchases = useSelector(state => state.purchases)
  const handleReview = () => {

  }


  return (
    <>
      <Modal onClose={() => setAddReview(false)}>
        <form onSubmit={handleReview}>
          <div>Leave a Review</div>
          <div className="review-product-upper">
            <div className="review-product-img-outer"><img className="review-product-img"></img></div>
            <div className="review-product-right">
              <div className="review-product-right-name">{products[productId].name}</div>
              <div className="review-product-right-shop-name">Purchased from {purchases[purchaseId].shop_name} on {formatDate(purchases[purchaseId].created_at)}</div>
            </div>
          </div>
          <div>Review Stars: {reviewStars}</div>
          <div>
            Helpful reviews on Etsy mention:
            the quality of the item
            if the item matched the description
            if the item met your expectations
          </div>
          <div>Review Content</div>
        </form>
      </Modal>
    </>
  )
}

export default CreateReview
