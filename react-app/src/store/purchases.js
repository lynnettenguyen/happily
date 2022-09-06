const GET_PURCHASES = 'purchases/GET_PURCHASES'
const REMOVE_PURCHASE = 'purchases/REMOVE_PURCHASE'

const getPurchases = (purchases) => ({
  type: GET_PURCHASES,
  purchases
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


export const cancelPurchase = (orderNumber) => async (dispatch) => {
  const response = await fetch(`/api/purchases/${orderNumber}`, {
    method: "DELETE"
  })

  if (response.ok) {
    const purchase = await response.json();
    dispatch(removePurchases(orderNumber))
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
