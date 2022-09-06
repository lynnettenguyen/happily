const GET_PURCHASES = 'purchases/GET_PURCHASES'
const ADD_PURCHASE = 'purchases/ADD_PURCHASE'
const REMOVE_PURCHASE = 'purchases/REMOVE_PURCHASE'

const getPurchases = (purchases) => ({
  type: GET_PURCHASES,
  purchases
})

const addPurchase = (newPurchase) => ({
  type: ADD_PURCHASE,
  newPurchase
})

const removePurchases = (purchaseId) => ({
  type: REMOVE_PURCHASE,
  purchaseId
})


export const getAllPurchases = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/purchases`);

  if (response.ok) {
    const purchases = await response.json();
    dispatch(getPurchases(purchases))
    return purchases;
  }
}

export const createPurchase = (purchaseData) => async (dispatch) => {
  const { order_number, user_id, product_id, quantity, product_total, purchase_total } = purchaseData;
  const response = await fetch(`/api/purchases`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      order_number, user_id, product_id, quantity, product_total, purchase_total
    })
  })

  if (response.ok) {
    const newPurchase = await response.json()
    dispatch(addPurchase(newPurchase));
    return newPurchase;
  }
}

export const cancelPurchase = (purchaseId) => async (dispatch) => {
  const response = await fetch(`/api/purchases/${purchaseId}`, {
    method: "DELETE"
  })

  if (response.ok) {
    const purchase = await response.json();
    dispatch(removePurchases(purchaseId))
    return purchase;
  }
}


const purchaseReducer = (state = {}, action) => {
  let newState = {}
  switch (action.type) {
    case GET_PURCHASES: {
      for (let purchase of action.purchases) newState[purchase.id] = purchase
      return newState
    }
    case ADD_PURCHASE: {
      newState = { ...state }
      newState[action.newPurchase.id] = action.newPurchase
      return newState
    }
    case REMOVE_PURCHASE: {
      newState = { ...state }
      delete newState[action.purchaseId]
      return newState
    }
    default:
      return state;
  }
}

export default purchaseReducer
