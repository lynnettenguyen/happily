const GET_REVIEWS = 'reviews/GET_REVIEWS'
const GET_REVIEWS_PRODUCTS = 'reviews/GET_REVIEWS_PRODUCTS'
const ADD_REVIEW = 'reviews/ADD_REVIEW'
const EDIT_REVIEW = 'reviews/EDIT_REVIEW'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'

const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  reviews
})

const getReviewsProducts = (reviews) => ({
  type: GET_REVIEWS_PRODUCTS,
  reviews
})

const addReview = (newReview) => ({
  type: ADD_REVIEW,
  newReview
})

const editReview = (review) => ({
  type: EDIT_REVIEW,
  review
})

const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  reviewId
})

export const getAllReviews = () => async (dispatch) => {
  const response = await fetch(`/api/reviews`);

  if (response.ok) {
    const reviews = await response.json();
    dispatch(getReviews(reviews))
    return reviews;
  }
}

export const getAllProductReviews = (product_id) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${product_id}`);

  if (response.ok) {
    const reviews = await response.json();
    dispatch(getReviewsProducts(reviews))
    return reviews;
  }
}


export const addNewReview = (reviewData) => async (dispatch) => {
  const { user_id, content, product_id, stars } = reviewData;
  const response = await fetch(`/api/reviews`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id, content, product_id, stars
    })
  })

  if (response.ok) {
    const newReview = await response.json()
    dispatch(addReview(newReview));
    return newReview;
  }
}

export const updateReview = (reviewData) => async (dispatch) => {
  const { review_id, content, product_id, stars } = reviewData;
  const response = await fetch(`/api/reviews/${review_id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content, product_id, stars
    })
  })


  if (response.ok) {
    const review = await response.json()
    dispatch(editReview(review));
    return review;
  }
}

export const removeReview = (reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}`, {
    method: "DELETE"
  })

  if (response.ok) {
    const review = await response.json();
    dispatch(deleteReview(reviewId))
    return review;
  }
}


const reviewsReducer = (state = {}, action) => {
  let newState = {}
  switch (action.type) {
    case GET_REVIEWS: {
      for (let review of action.reviews) newState[review.id] = review
      return newState
    }
    case GET_REVIEWS_PRODUCTS: {
      for (let review of action.reviews) newState[review.id] = review
      return newState
    }
    case ADD_REVIEW: {
      newState = { ...state }
      newState[action.newReview.id] = action.newReview
      return newState
    }
    case EDIT_REVIEW: {
      newState = { ...state }
      newState[action.review.id] = action.review
      return newState
    }
    case DELETE_REVIEW: {
      newState = { ...state }
      delete newState[action.reviewId]
      return newState
    }
    default:
      return state;
  }
}

export default reviewsReducer
