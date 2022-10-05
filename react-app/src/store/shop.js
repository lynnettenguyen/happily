const GET_SHOP = 'reviews/GET_SHOP'
const EDIT_SHOP = 'reviews/EDIT_SHOP'

const getShop = (shop) => ({
  type: GET_SHOP,
  shop
})

const editShop = (shop) => ({
  type: EDIT_SHOP,
  shop
})


export const findShop = (shop_name) => async (dispatch) => {
  const response = await fetch(`/api/shop/${shop_name}`);

  if (response.ok) {
    const shop = await response.json();
    dispatch(getShop(shop))
    return shop;
  }
}

export const updateShop = (shopData) => async (dispatch) => {
  const { shop_name, title, location, icon } = shopData;
  const response = await fetch(`/api/shop/${shop_name}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title, location, icon
    })
  })

  if (response.ok) {
    const shop = await response.json()
    dispatch(editShop(shop));
    return shop;
  }
}


const shopReducer = (state = {}, action) => {
  let newState = {}
  switch (action.type) {
    case GET_SHOP: {
      newState[action.shop.user_id] = action.shop
      return newState
    }
    case EDIT_SHOP: {
      newState = { ...state }
      newState[action.shop.user_id] = action.shop
      return newState
    }
    default:
      return state;
  }
}

export default shopReducer
